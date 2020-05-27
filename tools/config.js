var firebaseConfig = {
  apiKey: "AIzaSyAGdB96QJfvsvycIB-NT8XMIeRaAf0wdMA",
  authDomain: "fire-link-tech.firebaseapp.com",
  databaseURL: "https://fire-link-tech.firebaseio.com",
  projectId: "fire-link-tech",
  storageBucket: "fire-link-tech.appspot.com",
  messagingSenderId: "75657139980",
  appId: "1:75657139980:web:eb1432b74dc597d8315b29",
  measurementId: "G-SJXX9WWX1M" 
  };

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

export {firebase, firebaseConfig}