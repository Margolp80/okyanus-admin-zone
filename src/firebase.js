import * as firebase from "firebase/firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCTBP8EmB_Fa30h8YjL96wishRP6jyxQmc",
  authDomain: "fire-base-crud-project.firebaseapp.com",
  databaseURL:
    "https://fire-base-crud-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fire-base-crud-project",
  storageBucket: "fire-base-crud-project.appspot.com",
  messagingSenderId: "332659196839",
  appId: "1:332659196839:web:0b99df38b6eb2b276f2c82",
};

// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb.database().ref();
