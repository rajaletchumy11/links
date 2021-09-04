// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
// res.statusCode = 200;
// res.setHeader('Content-Type', 'text/plain');
// res.end('Hello from NodeJS\n');
// });

// server.listen(port, hostname, () => {
// console.log(`Server running at http://${hostname}:${port}/`);
// });



// import Vue from 'vue'
// import App from './vue/app'


// require vue
window.Vue = require('vue').default;

// register vue
Vue.component('example-component', require('./components/ExampleComponent.vue').default)

// initialize vue
const app = new Vue({
    el: '#app',
});
