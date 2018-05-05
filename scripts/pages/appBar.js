var fastn = require('../fastn'),
    app = require('../app');

var css = require('sheetify')
css('tachyons')

const header = css`:host {
  position: fixed;
  width: 100%;
  height: 56px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
  background: lime;
  font-weight: bold;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}`

module.exports = function(){
    return fastn('div', {class: `${header}`},
        fastn('div',{class:'menu'},fastn('i', {'class': 'mdi mdi-menu'}) )
            .on('click', function(event, scope){
                app.pages.setPage('documents')
            }),
        fastn('div',{class:'title'}, 'PREDICATOR' ),
        fastn('div',{class:'menu'},fastn('i', {'class': 'mdi mdi-dots-vertical'}) )
            .on('click', function(){
                console.log('setting click');
            })

    )
};
