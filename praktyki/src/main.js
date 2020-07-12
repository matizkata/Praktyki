import Vue from 'vue';
import App from './App';
// import 'bootstrap';

new Vue({
  el: '#app',
  render: function(createElement){
    return createElement(App);
  }
})
