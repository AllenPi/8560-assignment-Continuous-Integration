import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA3l1-kHnSZvIe4laxf5tC2y8fFntAdL0c",
    authDomain: "prog8110f22-441fc.firebaseapp.com",
    databaseURL: "https://prog8110f22-441fc-default-rtdb.firebaseio.com",
    projectId: "prog8110f22-441fc",
    storageBucket: "prog8110f22-441fc.appspot.com",
    messagingSenderId: "913173863543",
    appId: "1:913173863543:web:eaf4f7ee6ce1ffb59fba72",
    measurementId: "G-568ZM01Y9B"
 
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };