const Nanocomponent = require('nanocomponent')
const html = require('bel')
const css = require('sheetify')
const components = require('./components')

const storyEditor = css`:host {
  bottom: 0;
  height: 100%;
}`;

class Builder extends Nanocomponent {
  constructor () {
    super()
    this.id = null
    this.name = null
    this.elements = null
  }

  createElement (story) {
    // console.log('story',story);
    this.id = story.id
    this.elements = story.elements;
    return html`<div class="${storyEditor} flex flex-column pa3 pt3">
      ${Object.keys(this.elements).map(function(key, index) {
        // console.log('key',key);
        // console.log('index',index);
        // console.log('this.elements[key]',story['elements'][key]);
        return components[ story['elements'][key]['component'] ].render( key, story['elements'][key] );
      })}
    </div>`
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
    //  emit('update:story', id, e.target.value)
    // }



    // emit('update:story',e.target.value)
  }

}

module.exports = Builder
