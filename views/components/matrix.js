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

var x = 50;
var y = 100;
var z = 0;

this.translationMatrix = [
    1,    0,    0,   0,
    0,    1,    0,   0,
    0,    0,    1,   0,
    x,    y,    z,   1
];
  }

  createElement (key, component) {
    console.log('key',key,'component',component);
    this.id = component.id
    this.name = component.name
    this.value = component.value
    return html`<div id='move-me' class='transformable'>
          <h2>Move me with a matrix</h2>
          <p>   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum.</p>
        </div>`
  }

  // Create the matrix3d style property from a matrix array
  matrixArrayToCssMatrix(array) {
    return 'matrix3d(' + array.join(',') + ')';
  }
  // Implement conditional rendering
  update (component) {
    // Returns a result like: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1);"
    var matrix3dRule = this.matrixArrayToCssMatrix(translationMatrix);

    // Set the transform
    this.component.style.transform = matrix3dRule;
    return component !== this.component
  }
}

module.exports = Component
