const Nanocomponent = require('nanocomponent')
const html = require('bel')
const css = require('sheetify')

const textareaINPUT = css`:host {
  width: 100%;
  height: 100%;
  overflow: auto;
  bottom: 0px;
  font-size: 12px;

  outline: none;
  white-space: pre-wrap;
}`

const fieldsetCSS = css`:host {
  margin: 0px;
  margin-bottom: 5px;
  padding: 0px;
  bottom: 0px;
}`

class Component extends Nanocomponent {
  constructor () {
    super()
    this.id = null
    this.story = null
  }

  createElement (key, component) {
    this.id = component.id
    this.value = component.value
    this.name = component.name
    return html`<fieldset class="${fieldsetCSS} bn">
        <textarea
              id="${this.id}"
              name="${this.id}"
              rows="50"
              cols="30"
              class="${textareaINPUT} Courier pa2 mb3 ba b--near-white fw2 black">
                ${this.value}
         </textarea>
      </fieldset>`
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
    var commas = json.split('\n')
    json.match(/,/);
    //
    // console.log('commans',commas)
    // if ( Math.abs(commas.length % 2) == 1) {
    //   console.log('trouble');
    // }
    if(e.keyCode == 9){
      //add tab
      document.execCommand('insertHTML', false, '&#009');
      //prevent focusing on next element
      e.preventDefault()
    }

    if(e.keyCode == 222 && shiftdown){
      document.execCommand('insertHTML', false, '\"\":\"\",');
      e.preventDefault()
    }

    if( e.keyCode == 13 ){
      this.rows = commas.length + 1
    }


    // else if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19))
    // {
    //   alert("Ctrl-S pressed");
    //   event.preventDefault();
    //  emit('update:record', id, e.target.value)
    // }



    // emit('update:record',e.target.value)
  }

}

module.exports = Component
