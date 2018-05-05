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

  createElement (key, component) {
    this.id = component.id
    this.name = component.name
    this.value = component.value
    return html`<fieldset class="${fieldsetCSS} bn">
          <label for="${key}" class="gray fw2" >${component.label}</label>
          <span class="avenir pa2 fw2 w-100 black center flex align-items">
            <p>$</p>
            <input id="${key}" name="${key}"
              class="avenir pa2 fw2 ba b--near-white"
              value="${component.value}"
              required
              type="text">
          </span>
      </fieldset>`
  }

  // Implement conditional rendering
  update (component) {
    return component !== this.component
  }
}

module.exports = Component
