// import React from 'react';
// import ReactDOM from 'react-dom';
// import Select from 'react-select';
// import Login from './components/Login.jsx';
// import NavBar from './components/NavBar.jsx';

// const options = [
//     {value: 'test One', label: "Operation Spark"},
//     {value: 'test Two', label: "Bonnabel"},
//     {value: 'test Three', label: 'East Jefferson'},
//     {value: 'test Four', label: 'Grace King'}
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
//                         <Login state={this.state}/>
//                     </div>
//                 )
//             }
//             return (
//                 <div>
//                     <NavBar />
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

// ReactDOM.render(<App />, document.getElementById('app'));