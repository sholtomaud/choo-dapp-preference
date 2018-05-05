'use strict';

const Nanocomponent = require('nanocomponent')
const html = require('bel')
const css = require('sheetify')
const SideNav = require('./sideNav');


const sideNav = new SideNav();

const prefix = css('./styles.css')



const showSideNavButtonCSS = css`:host {
  color: black;
  background-color: white;
}`

// * {
//   box-sizing: border-box;
// }
//
// html, body {
//   padding: 0;
//   margin: 0;
//   background: #FAFAFA;
//   font-family: Arial, sans-serif;
// }

const header = css`:host {
  position: fixed;
  width: 100%;
  height: 56px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
  background: #000;
  color: #FFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}`

const header__menu_toggle =css `:host {
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  color: #FFF;
}`

// const header = css`:host {
//   padding: 10px;
//   background-color: black;
//   z-index: 9;
//   display: flex;
//   flex-direction: row-reverse;
//   align-items: center;
//   box-shadow: 1em 1em .5em -.5em rgba(0, 0, 0, 0.3);
// }`
const hamburger = css`:host {
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 6px 0;

}`

//
class Component extends Nanocomponent {
  constructor () {
    super()
    this.id = null
    this.name = null
    this.value = null
  }

  createElement (state) {
      return html`<div >
          ${sideNav.render(state.navItems)}
          <div class="header">

            <button class="js-menu-show header__menu-toggle material-icons" onclick="${sideNav.showSideNav}">
              <div class="${hamburger}"></div>
              <div class="${hamburger}"></div>
              <div class="${hamburger}"></div>
            </button>
            <div>Hello</div>
            <div></div>
          </div>
        </div>`
  }

  update (component) {
      return component !== this.component
  }
}


module.exports = Component
