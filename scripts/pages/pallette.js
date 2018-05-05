var fastn = require('../fastn'),
    app = require('../app');

var css = require('sheetify')
css('tachyons')

const palletteCSS = css`:host {
  position: fixed;
  width: 10vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background-color: transparent;
  color: white;
  display: flex;
}`

module.exports = function(){
    return fastn('div', {class: `${palletteCSS}`},
      fastn('div',"hello world")
    )
};
