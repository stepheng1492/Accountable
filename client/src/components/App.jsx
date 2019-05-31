import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { auth, provider } from '../firebaseConfig.js';
import TeacherHome from './TeacherHome.jsx';
<<<<<<< HEAD
import axios from 'axios';
=======
import '../../styles/styles.css'
>>>>>>> a0b847ed01ecb6f0d82195273ac4ee6ede7e8ca4

// const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: null,
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                axios.post('/login', {
                    name: result.additionalUserInfo.profile.name,
                    email: result.additionalUserInfo.profile.email,
                })
                this.setState({
                    user: result.user,
                })
            })
    }

    logout() {
        auth.signOut()
            .then((result) => {
                this.setState({
                    user: null,
                })
            })
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if(user) {
                this.setState({ user })
            }
        })
    }

    render() {
        let authButton = this.state.user ?
            <TeacherHome logout={this.logout}/> :
            <button onClick={this.login}>Log In</button>

        return (
            <div>
                { authButton }
            </div>
        )
    }
}

// const firebaseAppAuth = firebaseApp.auth();

// const provider = {
//     googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

// export default withFirebaseAuth({
//     provider,
//     firebaseAppAuth,
// // })(App);
// module.exports = App;

ReactDOM.render(<App />, document.getElementById('app'));
