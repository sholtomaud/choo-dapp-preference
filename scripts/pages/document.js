var fastn = require('../fastn'),
    app = require('../app');


module.exports = function(){
    return fastn('div', {class: 'doc'},
        fastn('textarea',
            {
                class:'predicateTitle',
                disabled: fastn.binding('disabled').attach(app.disable.model),
                value: fastn.binding('document.title'),
                onkeyup: 'value:value'
            }
        ),
        fastn('div',
          fastn('textarea',
            {
                class: 'predicateInput',
                disabled: fastn.binding('disabled').attach(app.disable.model),
                rows: 40,
                value: fastn.binding('document.predicate') ,
                onkeyup: 'value:value'
            }).on('click',function(event, scope){
                console.log('text area clicked: ', scope);
            })
        ),
        require('./disable')('update')
    );
};
