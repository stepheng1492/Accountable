const firebase = require('firebase/app');

//add config file right here
const config = {
    apiKey: "AIzaSyCbYYSdnBfajUrANE5S36uJDvz2Zt2vQ5c",
    authDomain: "accountable-7852c.firebaseapp.com",
    databaseURL: "https://accountable-7852c.firebaseio.com",
    projectId: "accountable-7852c",
    storageBucket: "accountable-7852c.appspot.com",
    messagingSenderId: "571094616529",
    appId: "1:571094616529:web:4fe12958e82efff3",
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth();

module.exports = {
    firebase,
    provider,
    auth
}