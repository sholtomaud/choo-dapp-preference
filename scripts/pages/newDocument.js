var fastn = require('../fastn'),
    app = require('../app');


module.exports = function(){
    return fastn('div',
        fastn('list', {
            class: fastn.binding('styles.currentStyle.paragraph')
            .attach(app.models.data.model),
            items: fastn.binding('item|*'),
            template: function(model){
                return fastn('textarea',
                    {
                        class:'predicateTitle',
                        disabled: fastn.binding('disabled').attach(app.disable.model),
                        // value: fastn.binding('document.title').attach(app.documents.documentModel),
                        value: app.documents.title,
                        placeholder: 'Predicate title',
                        onkeyup: 'value:value'
                    }
                )
            }
        })


        // fastn('textarea',
        //     {
        //         class:'predicateTitle',
        //         disabled: fastn.binding('disabled').attach(app.disable.model),
        //         // value: fastn.binding('document.title').attach(app.documents.documentModel),
        //         value: app.documents.title,
        //         placeholder: 'Predicate title',
        //         onkeyup: 'value:value'
        //     }
        // ),
        // fastn('div',
        //   fastn('textarea',
        //     {

        //         class: 'predicateInput autoresize',
        //         disabled: fastn.binding('disabled').attach(app.disable.model),
        //         style : fastn.binding('currentParagraph.scrollHeight', function(h){
        //             var he = {};
        //             he['height'] = h;
        //             return he;
        //         }),
        //         // clientHeight : fastn.binding('currentParagraph.scrollHeight'),
        //         // scrollTop: fastn.binding('currentParagraph.scrollTop'),
        //         value: fastn.binding('currentParagraph.value'),
        //         onkeyup: 'value:value',
        //         // value: app.documents.predicate,
        //         // value: fastn.binding('document.predicate').attach(app.documents.documentModel),
        //         placeholder: 'Type your predicate text here'
        //     })
        // )
        // .on('keydown',function(event,scope){
        //     // console.log('event', event.target.scrollHeight);
        //     // String.fromCharCode(e.keyCode);

        //     switch (event.keyCode){
        //         case 13:
        //             console.log('return event');
        //             break;
        //     }
        //     app.paragraph.setScrollHeight(event.target.scrollHeight);
        // })
        .attach(app.paragraph.model),
        require('./disable')('create')
    );
};
