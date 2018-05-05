var fastn = require('../../fastn'),
    paragraphModel = new fastn.Model({
        currentParagraph : {
            scrollHeight : 140,
            scrollTop: 0,
            value: ''
        },
        paragraphs : []
    });

// debugging
paragraphModel.on('.|**', function(p){
  console.log(p);
});



module.exports = {
    model : paragraphModel,
    currentParagraph: fastn.binding('currentParagraph').attach(paragraphModel),
    setScrollHeight: function(height){
        paragraphModel.set('currentParagraph.scrollHeight',height);
    }
}
