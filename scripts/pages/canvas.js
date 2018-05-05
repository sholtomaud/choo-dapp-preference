var fastn = require('../fastn'),
    app = require('../app');

var css = require('sheetify')
css('tachyons')

const canvasCSS = css`:host {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: lightGray;
  color: #000;
  display: flex;
}`
// repeating-linear-gradient(
//   -55deg,
//   #304f50,
//   #304f50 10px,
//   #263f40 10px,
//   #263f40 20px
// );
module.exports = function(){
    return fastn('canvas', {class: `${canvasCSS}`} )
};
