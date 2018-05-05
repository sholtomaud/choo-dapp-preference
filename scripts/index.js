var fastn = require('./fastn');

window.addEventListener('load', function(){
    var pages = require('./pages')();

    pages.attach().render();

    document.body.appendChild(pages.element);
});
