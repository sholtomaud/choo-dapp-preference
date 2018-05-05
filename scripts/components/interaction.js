

'use strict'

const crelns = require('crelns');
const crel = require('crel');


// const defaultMap = {
//   zoomControl: false,
//   center: [-23.0000, 146.62987],
//   zoom: 5,
//   minZoom: 4
// }


var css = require('sheetify')
css('tachyons')

const containerCSS = css`:host {
  padding: 1%;
  width: 22%;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
}`

const labelCSS = css`:host {
  font-family: Consolas, monaco, monospace;
	font-style: normal;
  font-size: 12px;
	font-variant: normal;
  color: black;
}`

module.exports = function(fastn, component, type, settings, children) {
  component.extend('_generic', settings, children);

  component.render = function(){
    component.element = crel('div',{'class':`${containerCSS}`},
      crelns('http://www.w3.org/2000/svg', 'svg',{'viewBox':'0 0 90 90'},
        crelns('http://www.w3.org/2000/svg', 'g',{ 'fill':'white','stroke':'black','stroke-width':2},
          crelns('http://www.w3.org/2000/svg', 'path',{'d':'M3 20 L60 20 L88 45 L60 70 L3 70 L30 45 L3 20 '})
        )
      ),
        crel('div',{'class':`${labelCSS}`},'Interact')
    );
    component.emit('render');
    return component;
  };

  component.on('click',function(event){
    console.log('click');
      //component.emit('click', event, component.scope())
  });

  return component;
}
