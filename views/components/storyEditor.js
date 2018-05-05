

const Nanocomponent = require('nanocomponent')
const html = require('bel')
const css = require('sheetify')

const Title = require('./title.js')
const ScreenplayTextarea = require('./screenplayTextarea.js')
const ScreenplayTitle = require('./screenplayTitle.js')
const TimeInput = require('./timeInput.js')
const MoneyInput = require('./moneyInput.js')

const title = new Title()
const screenplayTextarea = new ScreenplayTextarea()
const screenplayTitle = new ScreenplayTitle()
const timeInput = new TimeInput()
const moneyInput = new MoneyInput()


const storyEditor = css`:host {
  bottom: 0;
  border: 1px solid;
  height: 100%;
  width: 100%;
  outline: none;
}`;

class Component extends Nanocomponent {
  constructor () {
    super()
    this.id = null
    this.narrative = null
    this.key = null
    this.component = null
  }

  createElement (key, component) {
    this.id = component.id
    this.key = key
    this.name = component.name
    this.component = component
    console.log('this.key',this.key);
    return html`<div
      class="${storyEditor} Courier ttu tracked pa2 fw2 black center w-100 ba b--near-white flex align-items"
      contenteditable="true"
      onkeydown=${this.keydown}
    >

    </div>`
    // return html`<textarea
    //       id="${this.id}"
    //       name="${this.id}"
    //       rows="50"
    //       cols="30"
    //       onkeydown=${this.keydown}
    //       class="${storyEditor} Courier pa2 mb3 ba b--near-white fw2 black">
    //
    //  </textarea>`;
  }

  // onkeydown=${this.keydown}

  // Implement conditional rendering
  update (component) {

    return component !== this.component
  }

  keydown(e){

    var shiftdown = e.shiftKey ? true: false
    var json = e.target.value
    // console.log('json',json)
    // var commas = json.split('\n')
    // json.match(/,/);
    //
    // console.log('commans',commas)
    // if ( Math.abs(commas.length % 2) == 1) {
    //   console.log('trouble');
    // }
    if(e.keyCode == 9){
      console.log('9');
      //add tab

      // document.execCommand('insertHTML', false, '&#009');
      //prevent focusing on next element
      // e.preventDefault()
    }

    if(e.keyCode == 222 && shiftdown){
      console.log('22');
      // console.log('this.key',this.key,'this.component',this.component)
      // document.execCommand('insertHTML', false, title.render() );
      insertHTML();
      // return html`${title.render()}`;
      // console.log(tit);

      // document.execCommand('insertHTML', false, '\"\":\"\",');
      e.preventDefault()
    }

    if( e.keyCode == 13 ){
      console.log('13');
      // this.rows = commas.length + 1
    }


    // else if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19))
    // {
    //   alert("Ctrl-S pressed");
    //   event.preventDefault();
    //  emit('update:story', id, e.target.value)
    // }



    // emit('update:story',e.target.value)
  }

}

module.exports = Component


function insertHTML() {
  var sel, range;
  if (window.getSelection && (sel = window.getSelection()).rangeCount) {
    range = sel.getRangeAt(0);
    range.collapse(true);
    var input = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    input.id = "myId";
    input.value = "Camera";
    input2.value = "Location";
    input3.value = "Time";
    // input.appendChild( document.createTextNode("[]") );
    var dash = document.createTextNode("-");
    range.insertNode(title.render());
    range.insertNode(dash);
    range.insertNode(input2);
    range.insertNode(input);

    // Move the caret immediately after the inserted span
    // range.setStartAfter(input);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

// document.execCommand("InsertHTML", false,
//   `<input id="${e.keyCode}" name="${e.keyCode}"
//     class="avenir pa2 fw2 black center ba b--near-white flex align-items"
//     value="${e.keyCode}"
//     required
//     type="text"
//   >
//   <input id="${e.keyCode}" name="${e.keyCode}"
//     class="avenir pa2 fw2 black center ba b--near-white flex align-items"
//     value="${e.keyCode}"
//     required
//     type="text"
//   >
//   <input id="${e.keyCode}" name="${e.keyCode}"
//     class="avenir pa2 fw2 black center ba b--near-white flex align-items"
//     value="${e.keyCode}"
//     required
//     type="text"
//   >
//
//   `
// )
