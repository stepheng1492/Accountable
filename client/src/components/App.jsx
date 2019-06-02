import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { auth, provider } from '../firebaseConfig.js';
import TeacherHome from './TeacherHome.jsx';
import axios from 'axios';
import '../../styles/styles.css'
import Button from 'react-bootstrap/Button';
// const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: null,
    };
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
    const authButton = this.state.user
      ? <TeacherHome user={this.state.user} logout={this.logout}/>
    // <Button className="btn btn-dark btn-sm" onClick={this.login} block>Log In</Button>
      : (
        <div className="logincontainer">
          <h3 className="introtitle">Accountable</h3>
          <p>The app that lets teachers do more</p>
          <input onClick={this.login} className="loginButton" type="image" src="https://www.c-learning.net/storage/app/media/img/buttons/google-login-button.png" />
        </div>
);


    return (
      <div className="container">
        <div>
                { authButton }
                {/* <input className="loginButton" type="image" src="https://www.c-learning.net/storage/app/media/img/buttons/google-login-button.png"></input> */}
              </div>
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
