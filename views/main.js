var html = require('choo/html')

const AppShell = require('./components/appShell')
const appShell = new AppShell();
const Builder = require('./builder')
const builder = new Builder();

const css = require('sheetify')
const prefix = css('./components/styles.css')

var TITLE = 'choo-dapp-preference - main'

module.exports = view;

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="${prefix}">
      ${appShell.render(state)}
      <div>Financial Freedom: ${state.freedom} (${state.freedomUnits})</div>
          <div>Passive Cashflow: $${state.return}/day</div>

          <div>Assets: $${state.assets}</div>
          <div>Liabilities: $${state.liabilities}</div>
          <div>Expenses: $${state.expenses}</div>
          <div>Incomes: $${state.incomes}</div>

          <form id="comments_form" onsubmit=${onsubmit}>
            <div class="fieldset-wrapper">
              <fieldset>
                <legend>Your Contact Details</legend>
                <p class="field field-text">
                  <label for="comment-author">Name:</label>
                  <input name="comment-author" id="comment-author" type="text" />
                </p>
                <p class="field field-text">
                  <label for="comment-email">Email Address:</label>
                  <input name="comment-email" id="comment-email" type="email" />
                </p>
                <p class="field field-text">
                  <label for="comment-url">Web Address:</label>
                  <input name="comment-url" id="comment-url" type="url" />
                </p>
              </fieldset>
            </div>
            <input class="dim ph3 ba bw1 pv2 b--black pointer bg-white" type="submit" value="Login">

          </form>
          <form id="login" onsubmit=${onsubmit}>

            <div>
              <label for="_32552">
                Expense:
              </label>
              <input id="_32552" name="_32552"
                type="number"
                title="Username must be between 1 and 36 characters long."
                oninput=${onchange}
              >
            </div>
            <div>
              <label for="income">
                Income:
              </label>
              <input id="income" name="income"
                type="number"

              >
            </div>
            <div class="fieldset-wrapper">
  <fieldset>
    <legend>Remember Me</legend>
    <p class="field">
<label><input name="comment-remember" type="radio" value="yes" />Yes</label> </p>
<p class="field">
<label><input name="comment-remember" type="radio" value="no" checked="checked" />No</label>
    </p>
  </fieldset>
</div>
            <input class="dim ph3 ba bw1 pv2 b--black pointer bg-white" type="submit" value="Login">

          </form>


    </body>
  `;


  function showSideNav(){
    console.log('show side nav');
    sideNav.showSideNav();
  }

  function onchange(e){
                                            // 1.
    console.log('change data',e.target.value);
    emit('clicks:update', e.target.value);
  }
  function onsubmit (e) {                                               // 1.

     e.preventDefault()

     var form = e.currentTarget
     var data = new FormData(form)                                       // 2.
     var body = {}
     for (var pair of data.entries()) {
       console.log('pair',pair,pair[0]);
       body[pair[0]] = Number(pair[1])
     }// 4.
     emit('clicks:update', body);
   }

  function handleClick () {
    console.log('lickd');
    // var stateObj = { foo: "bar" };
    // state.events.PUSHSTATE(stateObj, "page 2", "new.html");
    emit('clicks:add', 1);
  }

}
// checkbox, radio, color, range, and file
// type="password" type="submit"
// email, url, and search
// <input type="text" id="field-email" name="field-email"> You could change the value of the type attribute like this:
// <input type="email" id="field-email" name="field-email">
// ${Object.keys(items).map(function(key, index) {
//                   return html`<li class="${navCSS}"><a href="/home">Home</a></li>`;
//                 })}
//
// type="checkbox"
