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
    console.log('key',key,'component',component);
    this.id = component.id
    this.name = component.name
    this.value = component.value
    return html`<fieldset class="${fieldsetCSS} bn">
          <label for="${key}" class="gray fw2" >${component.label}</label>
          <input id="${key}" name="${key}"
            class="avenir pa2 fw2 black center w-100 ba b--near-white flex align-items"
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
