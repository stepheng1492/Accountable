import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Classes from './Classes.jsx';

class TeacherHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTeacherId: 0,
            currentTeacherName: '',
            currentTeacherClasses: [],
            inputState: '',
        };
        this.getTeacherData = this.getTeacherData.bind(this);
        this.submitClass = this.submitClass.bind(this);
        this.changeInputState = this.changeInputState.bind(this);
        this.submitClassHandler = this.submitClassHandler.bind(this);
        this.getClassData = this.getClassData.bind(this);
    }

    changeInputState(e) {
        this.setState({
            inputState: e.target.value,
        })
    }

    submitClassHandler() {
        this.submitClass(this.state.inputState);
    }

    submitClass(className) {
        // axios post to classes
        // need to send the teacherID and className
        axios.post('/classes', {
            className,
            id: this.state.currentTeacherId,
        })
        .then(() => {
            this.getClassData()
                .then(data => {
                    this.setState({
                        currentTeacherClasses: data.data,
                    })
                });
        })
    }

    getTeacherData() {
        // axios get to teachers -- right now just get the one teacher in the database
       return axios.get('/teachers')
    }

    getClassData() {
        return axios.get('/classes', {
            params: {
                teacherID: this.state.currentTeacherId,
            }
        });
    }

    componentDidMount() {
        // show current teacher name and ID -- set the state
        this.getTeacherData()
        .then(data => {
            const name = data.data[0].name;
            const id = data.data[0].id;
            this.setState({
                currentTeacherId: id,
                currentTeacherName: name,
            })
        })
        .then(() => {
            this.getClassData()
            .then(data => {
                this.setState({
                    currentTeacherClasses: data.data,
                })
            });
        })
    }

    render() {
        return (
            <div>
                <h1>Accountable</h1>
                <h4>Teacher Name: {this.state.currentTeacherName}</h4>
                <h5>Teacher ID: {this.state.currentTeacherId}</h5>
                <div>
                    <input placeholder="add class here" onChange={this.changeInputState}></input>
                    <button onClick={this.submitClassHandler}>Add Class</button>
                    <Classes teacherID={this.state.currentTeacherId} teacherName={this.state.currentTeacherName} classList={this.state.currentTeacherClasses}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<TeacherHome />, document.getElementById('app'));