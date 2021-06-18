import firebase from 'firebase/app'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyBXbAzRF_JoypbvESWYr6cGjNaQfN0IU5Q",
    authDomain: "moizreacttodoapp.firebaseapp.com",
    projectId: "moizreacttodoapp",
    storageBucket: "moizreacttodoapp.appspot.com",
    messagingSenderId: "478381687484",
    appId: "1:478381687484:web:d56c7928c638907a0a06b9",
    measurementId: "G-XWLE1ZJTTV"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);