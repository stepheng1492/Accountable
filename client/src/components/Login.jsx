

// import React from 'react';
// import dummyData from '../dummyData.js';
// import Teacher from './Teacher.jsx';
// import axios from 'axios';

// class Login extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             attemptedPass: '',
//             validLogin: false,
//             currentTeacher: ''
//         };
        
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         // this.passwordQuery = this.passwordQuery.bind(this);
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         // this.passwordQuery()
//         // .then(results => {
//         //     console.log(results);
//         // })
//         // .catch( e => console.log(e));


//         dummyData.forEach( teacher => {
//             if (teacher.code.toString() === this.state.attemptedPass) {
//                 this.setState({
//                     validLogin: true,
//                     currentTeacher: teacher.name
//                 })
//                 return;
//             }
//         })
//     }

//     handleChange(event) {

//         this.setState({
//             attemptedPass: event.target.value
//         })
//     }

//     // passwordQuery() {
//     //     return axios.get('/teachers', {
//     //         params: this.state.currentTeacher
//     //     })
//     //     .then( response => {
//     //         console.log(response);
//     //     })
//     // }

//     render() {
//         const { validLogin, currentTeacher } = this.state;
//         if (validLogin) {
//             return (
//                 <div>
//                     <Teacher teacherName={currentTeacher} />
//                 </div>
//             )
//         }
//         return (
//             <div>
//             {/* {console.log(this.props.state.selected)}; */}
//             <h3>Please log in using your personal code</h3>
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                 <input type="text" name="code" placeholder="Enter passcode here" onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//         )
//     }
// }

// export default Login;