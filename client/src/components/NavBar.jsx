// import React from 'react';

// // const NavBar = (props) => {
// //     return (
// //         <div>
// //             Date: 
// //             Time: 
// //             Weather: 
// //             SchoolBanner:
// //         </div>
// //     )
// // }
// // class NavBar extends React.Component {
// //     getInitialState() {
// //       return {
// //         now: new Date(),
// //       };
// //     },
    
// //     componentDidMount: function() {
// //       const self = this;
// //       self.interval = setInterval(function() {
// //         self.setState({
// //           now: new Date(),
// //         });
// //       }, 1000);
// //     },
  
// //     componentWillUnmount: function() {
// //       clearInterval(this.interval);
// //     },

// //     render() {
// //       return (
// //         <div className="NavBar">
// //           <ul className="NavBar-menu">
// //             <div className="">
// //               <li className="NavBar-date"><Time value={this.state.now} format="DD/MM/YYYY" /></li>
// //               <li className="NavBar-time"><Time value={this.state.now} format="HH:mm:ss" /></li>
// //             </div>
// //           </ul>
// //         </div>
// //       );
// //     }
// //   };

// class NavBar extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             now: new Date()
//         }
//     }

//     render() {
//         return (
//             // <div>{this.state.now}</div>
//             <div>
//                 Time:
//                 Date:
//                 Banner:
//             </div>
//         )
//     }
// }

// export default NavBar;