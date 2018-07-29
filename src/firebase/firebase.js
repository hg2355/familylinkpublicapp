import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCFT8d4pV7l-Thb8CgaWkMqKoBAC7p9roo",
    authDomain: "familylink-1532712793973.firebaseapp.com",
    databaseURL: "https://familylink-1532712793973.firebaseio.com",
    projectId: "familylink-1532712793973",
    storageBucket: "familylink-1532712793973.appspot.com",
    messagingSenderId: "788113778619"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
