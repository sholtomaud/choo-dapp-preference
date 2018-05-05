const Nanocomponent = require('nanocomponent')
const html = require('bel')
const css = require('sheetify')

const fieldsetCSS = css`:host {
  margin: 0px;
  margin-bottom: 5px;
  padding: 0px;
}`

class Component extends Nanocomponent {
  constructor () {
    super()
    this.id = null
    this.name = null
    this.value = null
  }

  createElement () {
    var key = 'fase';
    return html`<span class="${fieldsetCSS} bn">
          <input id="${key}" name="${key}"
            class="avenir pa2 fw2 black center w-100 ba b--near-white flex align-items"
            value="somevalue"
            required
            type="text"
          >
      </span>`
  }

  // Implement conditional rendering
  update (component) {
    return component !== this.component
  }
}

module.exports = Component
