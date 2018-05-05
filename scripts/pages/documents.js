var fastn = require('../fastn'),
    app = require('../app');


module.exports = function(){
    return fastn('div',{class:'documentList'},
        fastn('list', {
            items: fastn.binding('documents'),
            template: function(){
                return fastn('div', {class: 'document'},
                    fastn('div', {class: 'mdi-type'},
                        fastn('i', {class: 'mdi mdi-file-document' } )
                    ),
                    fastn('div', {class: 'details'},
                        fastn('div', {class: 'docTitle'}, fastn.binding('title') ),
                        fastn('div', {class: 'author'}, 'by ',fastn.binding('firstName') ),
                        fastn('div', {class: 'docDate'}, fastn.binding('date') )
                    )
                )
                .on('click', function(event, scope){
                    app.pages.setPage('document', {
                        documentId: scope.get('_id')
                    });
                })
                .binding('item');
            }
        }),
        require('./new')()
    );
};
