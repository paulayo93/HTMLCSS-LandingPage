require('./css/main.css');

console.log("Hello Webpack");

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef  
  }