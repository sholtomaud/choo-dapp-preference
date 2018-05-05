var fastn = require('../../fastn'),
    pageModel = new fastn.Model(),
    currentPage = fastn.binding('currentPage').attach(pageModel),
    Router = require('route-tree'),
    router = new Router({
        documents:{
            _url: ['', '/', '/documents'],
            document: {
                _url: '/documents/{documentId}'
            },
            newDocument: {
                _url: '/newDocument/'
            },
            savDocument: {
                _url: '/documents/{documentId}'
            }
        }
    });

router.basePath = '';

currentPage.on('change', function(page){
    var route = router.get(page.name, page.values);

    if(!route){
        route = '/documents';
    }

    window.location.hash = route;
});

function updateCurrentPage(){
    var hash = window.location.hash.slice(1),
        page = currentPage(),
        newPage = {
            name: router.find(hash),
            values: router.values(hash)
        };

    if(page && newPage.name === page.name){
        return;
    }

    pageModel.set('currentPage', newPage);
}

window.addEventListener('hashchange', updateCurrentPage);

updateCurrentPage();

function setPage(pageName, values){
    currentPage({
        name: pageName,
        values: values
    });
}

module.exports = {
    currentPage: currentPage,
    setPage: setPage
};
