module.exports = require('fastn')({
    _generic: require('fastn/genericComponent'),
    templater: require('fastn/templaterComponent'),
    list: require('fastn/listComponent'),
    text: require('fastn/textComponent'),
    box: require('../components/box.js'),
    consumer: require('../components/consumer.js'),
    gain: require('../components/gain.js'),
    interaction: require('../components/interaction.js'),
    limiter: require('../components/limiter.js'),
    producer: require('../components/producer.js'),
    sink: require('../components/sink.js'),
    source: require('../components/source.js'),
    switcher: require('../components/switcher.js'),
    tank: require('../components/tank.js'),
    transaction: require('../components/transaction.js')
}, true);


// icon: require('svg-icon-component/iconComponent')({
//         resolvePath: function(iconName){
//             return 'foo/bar/baz' + iconName + '.svg'; // Example path
//         }
//     })
