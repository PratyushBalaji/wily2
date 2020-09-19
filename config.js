import * as firebase from 'firebase' 
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCDYwfQ14UFnSmOBUsY05ATj_o1fO9FkUQ",
    authDomain: "wily-74e0d.firebaseapp.com",
    databaseURL: "https://wily-74e0d.firebaseio.com",
    projectId: "wily-74e0d",
    storageBucket: "wily-74e0d.appspot.com",
    messagingSenderId: "1033336746572",
    appId: "1:1033336746572:web:e49153f114287bad17fae9"
};

firebase.initializeApp(firebaseConfig); 
export default firebase.firestore();