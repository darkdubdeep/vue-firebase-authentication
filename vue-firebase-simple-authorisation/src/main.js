// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWBCjK8_hhw2gqpEOjWqXEJsBu6U5qYUI",
  authDomain: "vue-firebase-authorisation.firebaseapp.com",
  databaseURL: "https://vue-firebase-authorisation.firebaseio.com",
  projectId: "vue-firebase-authorisation",
  storageBucket: "vue-firebase-authorisation.appspot.com",
  messagingSenderId: "685258245162"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
