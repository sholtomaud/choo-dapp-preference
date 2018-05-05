var fastn = require('../fastn'),
    app = require('../app');


module.exports = function(){
    return fastn('div',
      {
        class: 'new'
      },
        fastn('i', {'class': 'mdi mdi-plus' } )
      )
      .on('click', function(event, scope){
          app.disable.toggle();
          app.pages.setPage('newDocument');
      });
}
