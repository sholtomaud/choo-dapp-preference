const Nanocomponent = require('nanocomponent')
const html = require('bel')
const css = require('sheetify')

const fieldsetCSS = css`:host {
  margin: 0px;
  margin-bottom: 5px;
  padding: 0px;
}`

const inputClass = css`:host {
  outline: none;
}`

class Component extends Nanocomponent {
  constructor () {
    super()
    this.id = null
    this.value = null
  }

  createElement (key, component) {
    this.id = component.id
    this.value = component.value
    return html`<fieldset class="${fieldsetCSS} bn">
          <input id="${component.id}" name="${component.id}"
            class="${inputClass} avenir pa2 fw2 black center w-100 ba b--near-white flex align-items"
            value="${component.value}"
            required
            type="text"
          >
      </fieldset>`
  }

  // Implement conditional rendering
  update (component) {
    return component !== this.component
  }
}

module.exports = Component
