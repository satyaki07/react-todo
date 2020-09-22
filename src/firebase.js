// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDjs54_iXI-hvQl6lsLdt2NnTvlHDQ7TII",
//     authDomain: "todo-app-cp-85e98.firebaseapp.com",
//     databaseURL: "https://todo-app-cp-85e98.firebaseio.com",
//     projectId: "todo-app-cp-85e98",
//     storageBucket: "todo-app-cp-85e98.appspot.com",
//     messagingSenderId: "953778677805",
//     appId: "1:953778677805:web:8c62ede6c4dc79a84770a4",
//     measurementId: "G-7806753KVR"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjs54_iXI-hvQl6lsLdt2NnTvlHDQ7TII",
  authDomain: "todo-app-cp-85e98.firebaseapp.com",
  databaseURL: "https://todo-app-cp-85e98.firebaseio.com",
  projectId: "todo-app-cp-85e98",
  storageBucket: "todo-app-cp-85e98.appspot.com",
  messagingSenderId: "953778677805",
  appId: "1:953778677805:web:8c62ede6c4dc79a84770a4",
  measurementId: "G-7806753KVR",
});

const db = firebaseApp.firestore();

export default db;