var fastn = require('../fastn'),
    app = require('../app');


module.exports = function(){
  var loginComponent = fastn('div', {class: 'loginModal'},
    fastn('form',{class:'login'},
      fastn('label', {class:'loginTitle'}, 'Predicator Login'),
      fastn('div', {class:'loginDetails'},
        fastn('label','Login Name: '),
        fastn('input', {
          class: 'loginInput',
          placeholder: 'Login ID',
          value: fastn.binding('loginID'),
          onchange: 'value:value'
        }),
        fastn('label', 'Password: '),
        fastn('input', {
          class: 'loginInput',
          type: 'password',
          placeholder: 'Password',
          value: fastn.binding('password'),
          onchange: 'value:value'
        }),
        fastn('button', 'Login')
      )
    ).on('submit', function(event, scope){
      event.preventDefault();

      sessionService.setSession({
        loginID: ( scope.get('loginID') || 'Test User')
      });

      loginComponent.element.remove();
      loginComponent.destroy();
    })
  ).attach();

  return loginComponent;
};
