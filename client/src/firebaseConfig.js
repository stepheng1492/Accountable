const firebase = require('firebase/app');



firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth();

module.exports = {
    firebase,
    provider,
    auth
}