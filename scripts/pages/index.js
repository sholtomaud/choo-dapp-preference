var fastn = require('../fastn'),
    app = require('../app');


var pages = {
    documents: require('./documents'),
    document: require('./document'),
    newDocument: require('./newDocument'),
    login: require('./login')
};

module.exports = function(){
    return fastn('div',
        // require('./appBar')(),
        require('./canvas')(),
        // require('./pallette')(),
        require('./controls')(),
        fastn('div', {class: 'page'},
            fastn('templater', {
                data: app.pages.currentPage,
                template: function(data){
                    var page = data.get('item');

                    if(page.name in pages){
                        return pages[page.name]().binding('item');
                    }

                    return 'No page found';
                }
            })
        )
    );
};
