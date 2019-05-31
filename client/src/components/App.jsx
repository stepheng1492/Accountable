import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { auth, provider } from '../firebaseConfig.js';
import TeacherHome from './TeacherHome.jsx';
import '../../styles/styles.css'

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


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Select from 'react-select';
// import Login from './Login.jsx';
// import NavBar from './NavBar.jsx';

// const options = [
//     {value: 'test One', label: "Operation Spark"},
//     {value: 'test Two', label: "Tulane"},
//     {value: 'test Three', label: 'UNO'}
// ];

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loggedIn: false,
//             admin: false,
//             teacher: false,
//             selected: ''
//         }

//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(selectedOption) {
//         event.preventDefault();
//         this.setState({
//            selected: selectedOption.label
//         });
//     }

//     render() {
//         const { isLoggedIn, selected } = this.state;

//         if (!isLoggedIn) {

//             if (selected === 'Operation Spark') {
//                 return (
//                     <div>
//                         <NavBar />
//                         {/* <div>Some Nav Bar Stuff Here: Date, Time, School Banner</div> */}
//                         <Login state={this.state}/>
//                     </div>
//                 )
//             }
//             return (
//                 <div>
//                     <NavBar />
//                     {/* <div>Some Nav Bar Stuff Here: Date, Time, School Banner</div> */}
//                     <h2>Select Your School</h2>
//                     <div>
//                     <Select
//                         name="Choose an institution"
//                         value={selected}
//                         options={options}
//                         onChange={this.handleChange}
//                         />
//                     </div>
//                 </div>
//             )
//         }
//     }
// }
