var fastn = require('../../fastn'),
    pages = require('./pages'),
    documents = require('./documents');

var disableModel = new fastn.Model({
  disabled: true,
  class: 'edit',
  mdi: 'mdi mdi-lock'
});

// debugging
disableModel.on('.|**', function(disableData){
  // console.log(disableData);
});

function toggle (action){
    var disabled = disableModel.get('disabled');

    if (!disabled){
      documents.save( action, function (error, documentId){
        if ( error ){
          console.log('error in generating document', error);
        }
        pages.setPage('document', {
            documentId: documentId
        });
      })

      disableModel.update({'disabled':true,'class':'edit','mdi':'mdi mdi-lock'});
    } else{

      disableModel.update({'disabled':false,'class':'save','mdi':'mdi mdi-content-save'});
    }
}

module.exports = {
  model: disableModel,
  toggle: toggle,
  disabled: fastn.binding('disabled').attach(disableModel),
  class: fastn.binding('class').attach(disableModel)
};
