var firebaseConfig = {
  apiKey: "AIzaSyBcD5dS81l5bBcbD1ZqspzBZo0vEVRuRDg",
  authDomain: "firelink-8d703.firebaseapp.com",
  databaseURL: "https://firelink-8d703.firebaseio.com",
  projectId: "firelink-8d703",
  storageBucket: "firelink-8d703.appspot.com",
  messagingSenderId: "879280467371",
  appId: "1:879280467371:web:ac3c8ffa4bf234b747b6ee",
  measurementId: "G-RCMF31NPC6"
};

/* var firebaseConfig = {
  apiKey: "AIzaSyAGdB96QJfvsvycIB-NT8XMIeRaAf0wdMA",
  authDomain: "fire-link-tech.firebaseapp.com",
  databaseURL: "https://fire-link-tech.firebaseio.com",
  projectId: "fire-link-tech",
  storageBucket: "fire-link-tech.appspot.com",
  messagingSenderId: "75657139980",
  appId: "1:75657139980:web:eb1432b74dc597d8315b29",
  measurementId: "G-SJXX9WWX1M" 
  }; */

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