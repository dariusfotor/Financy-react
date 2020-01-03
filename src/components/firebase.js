import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC6Gr8gECpNSQ_uRU8Z-rWlQo5HxKqOcew",
  authDomain: "react-db-1f28d.firebaseapp.com",
  databaseURL: "https://react-db-1f28d.firebaseio.com",
  projectId: "react-db-1f28d",
  storageBucket: "react-db-1f28d.appspot.com",
  messagingSenderId: "39925836076",
  appId: "1:39925836076:web:1ef912de8c1f34a8b8a489"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
