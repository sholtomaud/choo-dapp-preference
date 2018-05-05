'use strict';

require('./scripts');

//
//
// var css = require('sheetify')
// var choo = require('choo')
// var store = require('./stores/clicks')
//
// // const UpUp = require('upup');
// //
// // UpUp.start({
// //   'content-url': 'dist/index.html',
// //   'assets': ['dist/8f160f77830a8bff/bundle.css','dist/dbdb54cad213ff00/bundle.js']
// //
// // });
// //
// // UpUp.start({
// //   'content': '<html><body><h1>Top Hotels in Rome</h1><p>Villa Domus</p><p>Hotel Trivelli</p></body></html>'
// // });
//
// css('tachyons')
//
// var fieldset = css`fieldset{
//   border: 0;
//   padding: 0.01px 0 0 0;
//   margin: 0;
//   min-width: 0;
//   display: table-cell;
// }`;
//
// var fieldset2 = css`@-moz-document url-prefix() {
//   fieldset {
//     display: table-cell;
//   }
// }`;
// var fieldset3 = css`input[type="radio"] {
//   margin-right: .75em;
// }`;
//
// // var fastn = require('fastner')({
// //    text: require('fastner/textComponent'), // Renders text
// //    _generic: require('fastner/genericComponent') // Renders DOM nodes
// // });
// //
// // var something = fastn('h1', 'Hello World');
// // something.render();
// //
// //  window.addEventListener('load', function(){
// //      document.body.appendChild(something.element);
// //  });
//
// var app = choo()
// if (process.env.NODE_ENV !== 'production') {
//   app.use(require('choo-devtools')())
// } else {
//   app.use(require('choo-service-worker')())
// }
//
// app.use(store)
//
// app.route('/', require('./views/main'))
// app.route('/*', require('./views/404'))
//
// if (!module.parent) app.mount('body')
// else module.exports = app
