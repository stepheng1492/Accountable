import React from 'react';
import axios from 'axios';

class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            name: '',
            parentName: '',
            parentPhone: '',
            parentEmail: '',
        }
        this.addStudents = this.addStudents.bind(this);
        this.changeStudentData = this.changeStudentData.bind(this);
    }


    // add students to database
    addStudents() {
        const { name, parentName, parentEmail, parentPhone } = this.state        
        axios.post('/students', {
            name,
            parentName,
            email: parentEmail,
            phone: parentPhone,
            classID: this.props.classID,
        })

    }

    // capture student data
    changeStudentData (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>Add Student to {this.props.className}</h1>
                <input placeholder="student name" name="name" onChange={this.changeStudentData}></input>
                <input placeholder="parent name" onChange={this.changeStudentData} name="parentName"></input>
                <input placeholder="parent phone" onChange={this.changeStudentData} name="parentPhone"></input>
                <input placeholder="parent email" onChange={this.changeStudentData} name="parentEmail"></input>
                <button onClick={this.addStudents}>Add Student</button>
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Parent Name</th>
                            <th>Parent Phone</th>
                            <th>Parent Email</th>
                            <th>Add Comment</th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}


export default Students