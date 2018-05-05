

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
  cursor: pointer;
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

const hexCSS = css`:host {
  stroke: #000;
  fill: white;
  stroke-width: 2;
}`

module.exports = function(fastn, component, type, settings, children) {
  component.extend('_generic', settings, children);

  component.render = function(){
    component.element = crel('div',{'class':`${containerCSS}`},
        crelns('http://www.w3.org/2000/svg', 'svg',{'viewBox':'0 0 90 90'},
          // crelns('http://www.w3.org/2000/svg', 'g',{ 'fill':'white','stroke':'black','stroke-width':2},
            crelns('http://www.w3.org/2000/svg', 'polygon',{
              'class':`${hexCSS}`,
              'points':'5,25 45,5 85,25 85,65 45,85 5,65 5,25 '
            })
          // )
        ),
        crel('div',{'class':`${labelCSS}`},'Consumer')
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
