var fastn = require('../fastn'),
    app = require('../app');


module.exports = function(action){
    return fastn('div',
      {
        class:fastn.binding('class').attach(app.disable.model)
      },
        fastn('i', {'class': fastn.binding('mdi').attach(app.disable.model) } )
      )
      .on('click', function(event, scope){
        app.disable.toggle(action)
      });
}
