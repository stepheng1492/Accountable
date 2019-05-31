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
        this.getStudents = this.getStudents.bind(this);
    }

    // get student data based on class ID, load it into students array on comp mount
    getStudents() {
        return axios.get('/students', {
            params: {
                classID: this.props.classID,
            }
        })
    }

    componentDidMount() {
        this.getStudents()
            .then((data) => {
                this.setState({
                    students: data.data,
                })
            })
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
    changeStudentData(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                    <h4>Add a new student to your {this.props.className} class</h4>
                <div className="addStudentContainer">
                    <input placeholder="student name" name="name" onChange={this.changeStudentData}></input>
                    <input placeholder="parent name" onChange={this.changeStudentData} name="parentName"></input>
                    <input placeholder="parent phone" onChange={this.changeStudentData} name="parentPhone"></input>
                    <input placeholder="parent email" onChange={this.changeStudentData} name="parentEmail"></input>
                    <button className="btn btn-sm btn-info" onClick={this.addStudents}>Add Student</button>
                </div>
                <br />
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Student Name</th>
                            <th>Parent Name</th>
                            <th>Parent Phone</th>
                            <th>Parent Email</th>
                            {/* <th>Add Comment</th> */}
                        </tr>
                        {
                            // map through students
                            // for each student, create a row
                            this.state.students.map(student => {
                                return (<tr>
                                    <td>{student.name || 'no name given'}</td>
                                    <td>{student.parentName || 'no parent name'}</td>
                                    <td>{student.phone || 'no phone number'}</td>
                                    <td>{student.email || 'no email'}</td>
                                    <br />
                                    <button className="btn btn-sm btn-info">Add comment</button>
                                </tr>)
                            })
                        }
                    </thead>
                </table>
            </div>
        );
    }
}


export default Students