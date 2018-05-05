'use strict';

const Nanocomponent = require('nanocomponent')
const html = require('bel')
const css = require('sheetify')
const Detabinator = require('./detabinator');

const sideNavCSS = css`:host {
  margin: 0px;
  bottom: 0px;
  padding: 0px;
  z-index: 999;
  width: 90vw;
  height: 100vh;
  background-color: transparent;
  box-shadow: 1em 1em .5em -.5em rgba(0, 0, 0, 0.3);
  overflow: hidden;
  pointer-events: none;
}`

const sideNav = css`:host {
  position: fixed;
  left: 0;
  top: 0;
  width: 90vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
}`

const before = css`:host {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
}`

const side_nav__container = css`:host {
  position: relative;
  width: 90vw;
  max-width: 400px;
  background: #FFF;
  height: 100%;
  box-shadow: 2px 0 12px rgba(0,0,0,0.4);
  transform: translateX(-102%);
  display: flex;
  flex-direction: column;
  will-change: transform;
}`


const jsMenuShow = css`:host {
  padding: 0px;
  width: 40px;
  height: 40px;
}`

const menuHeader = css`:host {
  height: 15vh; background-color: grey;  display: flex; flex-direction: row-reverse;
}`

const hideSideNavCSS = css`:host {
  display: none;
}`

const side_nav__visible = css`:host {
  pointer-events: auto;
}`

const side_nav__hide = css`:host {
  position: absolute;
  left: 16px;
  top: 16px;
  background: none;
  border: none;
  color: #FFF;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
}`

const side_nav__header = css`:host {
  height: 200px;
  background: #EA2663;
  color: #FFF;
  display: flex;
  padding: 16px;
  align-items: flex-end;
  font-size: 24px;
}`

const side_nav__content = css`:host {
  padding-top: 32px;
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}`

const showSideNavButtonCSS = css`:host {
  color: white;
}`

const navCSS = css`:host {
  font-family: Avenir Next, Avenir, Century Gothic, sans-serif;
  list-style: none;
  padding: 0;
  height: 40px;
  color: white;
  text-decoration: none;

}`


const side_nav__animatable = css`:host {
  transition: transform 0.13s cubic-bezier(0,0,0.3,1);
}`


class Component extends Nanocomponent {
  constructor () {
    super()
    // this.detabinator = new Detabinator(this.element);
    // this.detabinator.inert = true;
    this.showSideNav = this.showSideNav.bind(this);
    this.hideSideNav = this.hideSideNav.bind(this);
    this.blockClicks = this.blockClicks.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.update = this.update.bind(this);

    this.startX = 0;
    this.currentX = 0;
    this.touchingSideNav = false;

    this.supportsPassive = undefined;
    this.addEventListeners();
  }

  // apply passive event listening if it's supported
  applyPassive () {
    if (this.supportsPassive !== undefined) {
      return this.supportsPassive ? {passive: true} : false;
    }
    // feature detect
    let isSupported = false;
    try {
      document.addEventListener('test', null, {get passive () {
        isSupported = true;
      }});
    } catch (e) { }
    this.supportsPassive = isSupported;
    return this.applyPassive();
  }

  addEventListeners () {
    // this.showButtonEl.addEventListener('click', this.showSideNav);
    // this.hideButtonEl.addEventListener('click', this.hideSideNav);
    // this.element.addEventListener('click', this.hideSideNav);
    // this.sideNavContainerEl.addEventListener('click', this.blockClicks);

    // this.element.addEventListener('touchstart', this.onTouchStart, this.applyPassive());
    // this.element.addEventListener('touchmove', this.onTouchMove, this.applyPassive());
    // this.element.addEventListener('touchend', this.onTouchEnd);
  }

  onTouchStart (evt) {
    if (!this.element.classList.contains('side-nav--visible'))
      return;

    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;

    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  }

  onTouchMove (evt) {
    if (!this.touchingSideNav)
      return;

    this.currentX = evt.touches[0].pageX;
  }

  onTouchEnd (evt) {
    if (!this.touchingSideNav)
      return;

    this.touchingSideNav = false;

    const translateX = Math.min(0, this.currentX - this.startX);
    this.sideNavContainerEl.style.transform = '';

    if (translateX < 0) {
      this.hideSideNav();
    }
  }

  update () {
    if (!this.touchingSideNav)
      return;

    requestAnimationFrame(this.update);

    const translateX = Math.min(0, this.currentX - this.startX);
    this.sideNavContainerEl.style.transform = `translateX(${translateX}px)`;
  }

  blockClicks (evt) {
    evt.stopPropagation();
  }

  onTransitionEnd (evt) {
    this.element.classList.remove('side-nav--animatable');
    this.element.removeEventListener('transitionend', this.onTransitionEnd);
  }

  showSideNav (event) {
    console.log('hhh',this.element);
    this.element.classList.remove(hideSideNavCSS);
    this.element.classList.add('side-nav--animatable');
    this.element.classList.add('side-nav--visible');
    // this.detabinator.inert = false;
    this.element.addEventListener('transitionend', this.onTransitionEnd);
  }
  // showSideNav () {
  //   this.element.classList.add('side-nav--animatable');
  //   this.element.classList.add('side-nav--visible');
  //   // this.detabinator.inert = false;
  //   this.element.addEventListener('transitionend', this.onTransitionEnd);
  // }

  hideSideNav () {
    this.element.classList.add('side-nav--animatable');
    this.element.classList.remove('side-nav--visible');
    // this.detabinator.inert = true;
    this.element.addEventListener('transitionend', this.onTransitionEnd);
  }
  //
  // <div class="${hideSideNavCSS} ${sideNav}">
  //     <div class="${menuHeader}">
  //             <button class="${jsMenuShow}" onclick="${this.hideSideNav}">X</button>
  //     </div>
  //     <div class="${navCSS}">
  //         <ul>
  //   ${Object.keys(items).map(function(key, index) {
  //     return html`<li class="${navCSS}"><a href="/home">Home</a></li>`;
  //   })}
  //
  //         </ul>
  //     </div>
  //   </div>


  createElement (items) {
      return html`
      <nav class="js-side-nav-container side-nav__container">
      <button class="js-menu-hide side-nav__hide material-icons">close</button>
      <header class="side-nav__header">
        Side Nav
      </header>
      <ul class="side-nav__content">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
    </nav>`
    }

    update (component) {
        return false //component !== this.component
     }

}


module.exports = Component
