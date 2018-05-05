var fastn = require('../../fastn'),
    session = require('./session'),
    documentsModel = new fastn.Model(),
    documentModel = new fastn.Model({
        document: {
            data: {
                'date' : '',
                'type':'document',
                'firstName': session.getFirstname(),
                'surname': session.getSurname(),
                'predicate': '',
                'title':''
            },
            schemaId: '5630b4e52f8de60265e0ad6b'
        }
    }),
    cpjax = require('cpjax'),
    pages = require('./pages');


function getDocument(id, callback){
    cpjax({
        url:'/documents/' + id,
        dataType: 'json',
        headers:{
            authorization: session.getToken()
        }
    }, callback);
}



function getDocuments(){
    cpjax({
        url:'/documents',
        dataType: 'json',
        headers:{
            authorization: session.getToken()
        }
    }, function(error, data){
        if(error){
            return;
        }
        documentsModel.set('documents', data)
    });
}

function updateDocument( callback){
     cpjax({
        url:'/documents/' + documentModel.get('document.id'),
        method: 'PUT',
        dataType: 'json',
        data: getData(),
        headers:{
            authorization: session.getToken()
        }
    }, callback);
}

function createDocument(callback){
    console.log('getData',getData());
    cpjax({
        url:'/documents',
        method: 'POST',
        dataType: 'json',
        data: getData(),
        headers:{
            authorization: session.getToken()
        }
    }, callback);
}

getDocuments();

function getData(){
    var dat = {}
    dat.data = documentModel.get('document.data');
    dat.schemaId = documentModel.get('document.schemaId');
    dat.data.date = new Date();
    return dat;
}

// debugging
documentModel.on('.|**', function(data){
  // console.log(data);
});

function save (action, callback){
    if ( action == 'create' ) {
        createDocument(function(error, document){
            console.log('created Document.id',document.id);
            callback( null, document.id);
        })
    } else if (action == 'update'){
        updateDocument( function(error, document){
            console.log('updated Document.id',document.id);
            callback( null, document.id);
        })
    }
}

var pageHandlers = {
    document: function(page){
        getDocument(page.values.documentId, function(error, document){
            fastn.Model.set(page, 'document', document.data);
            documentModel.set('document', document);
        });
    },
    documents: function(page){
        function setDocuments(documents){
            fastn.Model.set(page, 'documents', documents);
        }

        documentsModel.on('documents|*', setDocuments);
        setDocuments(documentsModel.get('documents'));
    },
    newDocument: function(page){
        console.log('new document: ', page);
        fastn.Model.set(page, 'documents', {});
        documentModel.set({'document.data.title': '', 'document.data.predicate':'' });
    }
};

function pageChange(page){
    var handler = pageHandlers[page.name];

    handler && handler(page);
}


pageChange(pages.currentPage());

pages.currentPage.on('change', pageChange);

module.exports = {
    predicate: fastn.binding('document.data.predicate').attach(documentModel),
    title: fastn.binding('document.data.title').attach(documentModel),
    documentModel: documentModel,
    documents: fastn.binding('documents|*').attach(documentsModel),
    save: save
};
