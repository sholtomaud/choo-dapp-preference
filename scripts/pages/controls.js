var fastn = require('../fastn'),
    app = require('../app');

var css = require('sheetify')
css('tachyons')

const controlsCSS = css`:host {
  position: fixed;
  width: 100vw;
  height: 40vh;
  bottom: 0;
  left: 0;
  z-index: 9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  display: flex;

  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
}`
// border-style: dashed;
// border-color: green;

const iconBox = css`:host {
  width: 10vw;
  height: 10vh;
  background-color: transparent;
  color: white;
  display: flex;
  padding: 1vw;
}`

module.exports = function(){
    return fastn('div', {class: `${controlsCSS}`},
        fastn('source'),
        fastn('tank'),
        fastn('sink'),
        fastn('interaction'),
        fastn('consumer'),
        fastn('switcher'),
        fastn('producer'),
        fastn('limiter'),
        fastn('box'),
        fastn('gain'),
        fastn('transaction')
    )
};
