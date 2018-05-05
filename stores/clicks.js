// const localforage = require('localforage');
//
// localforage.config({
//     driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
//     name        : 'myApp',
//     version     : 1.0,
//     size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
//     storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
//     description : 'some description'
// });
//
// localforage.setItem('key', 'value', function (err) {
//   // if err is non-null, we got an error
//   if (err) console.log('setItem err',err);
//
//   localforage.getItem('key', function (err, value) {
//     // if err is non-null, we got an error. otherwise, value is the value
//     if (err) console.log('getItem err',err);
//     console.log('value',value);
//   });
// });


module.exports = store

function store (state, emitter) {
  state.totalClicks = 0
  state.assets = 0
  state.return = 0
  state.liabilities = 0
  state.incomes = 0
  state.expenses = 0
  state.freedom = 0
  state.freedomUnits = "days"
  state.navItems = {
    item1:"sommit",
    item2:"sommit"
  }
  emitter.on('DOMContentLoaded', function () {
    emitter.on('clicks:add', function (count) {
      state.assets += count
      state.liabilities -= count
      emitter.emit(state.events.RENDER)
    })

    emitter.on('clicks:update',function (data) {
        console.log('submitting data',data);
        state.expenses += (data.expense)? data.expense: 0;
        state.incomes += (data.income)? data.income: 0;

        state.assets += (data.expense)? state.incomes: 0;
        state.return = state.assets
        state.liabilities += (data.income)? state.expenses: 0;
        state.freedom = 370
        if (state.freedom > 365) {

          state.freedomUnits = "years"
        }

        //db.post(data)
    //
    //     for (var [key, value] in data.entries())
    //     {
    //     console.log('lok',key,value);
    //
    //     }
    //     var json = FormDataToJSON(data);
    // var schema = JSON.parse(json);
    //    console.log("json",JSON.stringify(json));
    //    console.log("value",JSON.parse(value));
    //    console.log("whllo",json);
        emitter.emit(state.events.RENDER)
      })


  })

  function FormDataToJSON(formData ){
    var ConvertedJSON= {};
    for (var [key, value] in formData.entries())
    {
        ConvertedJSON[key] = value;
    }
    return ConvertedJSON
}

}
