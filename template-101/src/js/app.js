import Vue from "vue";
import App from "./App.vue";
import VueSweetalert2 from 'vue-sweetalert2';
// import Main from "./components/Main.vue";
// Vue.component('Main', Main)

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

import "./index"


new Vue({
    el: '#vue-app',
    render: h => h(App)
})
