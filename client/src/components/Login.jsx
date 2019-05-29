import React from 'react';
import dummyData from '../dummyData.js';
import Teacher from './Teacher.jsx';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attemptedPass: '',
            validLogin: false,
            currentTeacher: '',
            teacherId: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        dummyData.forEach( teacher => {
            if (teacher.code.toString() === this.state.attemptedPass) {
                console.log(teacher.id)
                this.setState({
                    validLogin: true,
                    currentTeacher: teacher.name,
                    teacherId: teacher.id
                })
                return;
            }
        })
    }

    handleChange(event) {
        this.setState({
            attemptedPass: event.target.value
        })
    }

    render() {
        const { validLogin, currentTeacher, teacherId } = this.state;
        if (validLogin) {
            // console.log(this.state);
            return (
                <div>
                    <Teacher teacherName={currentTeacher} uniqId={teacherId} />
                </div>
            )
        }
        return (
            <div>
            <h3>Please log in using your personal code</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                <input type="text" name="code" placeholder="Enter passcode here" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}

export default Login;