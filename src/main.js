import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import router from '@/router'
import Firebase from 'firebase';

import Vue from 'vue'
import App from './App'

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

import { rtdbPlugin } from 'vuefire';
Vue.use(rtdbPlugin);

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false


let config = {
    apiKey: "AIzaSyDmd5QHPwIdzgHTxgLVe6otisgA3zo8e4c",
    authDomain: "map-firebase-vue.firebaseapp.com",
    databaseURL: "https://map-firebase-vue.firebaseio.com",
    projectId: "map-firebase-vue",
    storageBucket: "",
    messagingSenderId: "229959598563",
    appId: "1:229959598563:web:fd4351036f6d9858c5a0d6",
    measurementId: "G-RWLSBCXENW"
};

let app = Firebase.initializeApp(config);
let db = app.database();

let usuariosRef = db.ref('usuarios');


Firebase.auth().onAuthStateChanged(function(user) {
    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    })
});