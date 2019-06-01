import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Classes from './Classes.jsx';
// import Modal from './Modal.jsx';

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
        return axios.get('/teachers', {
            params: {
                email: this.props.user.email,
            }
        })
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
                <div className="header">
                    <h1 className='title'>Accountable</h1>
                <button text-align="right" className="btn btn-sm" onClick={this.props.logout}>Log Out</button>
                    </div>
                {/* <article className="quotecontainer">
                    <blockquote>
                        <strong>Accountability</strong> is <em>the measure</em> of a <strong>leaders height</strong>
                    </blockquote>
                    <b>Jeffrey Benjamin</b>
                </article> */}
                <div className="greeting">
                    <h4>Welcome Back, {this.state.currentTeacherName}</h4>
                </div>
                {/* <h5>Teacher ID: {this.state.currentTeacherId}</h5> */}
                <br />
                <div className="classes">
                    <button className="btn btn-dark btn-sm" onClick={this.submitClassHandler}>Add Class</button>
                    <input placeholder="new class name" onChange={this.changeInputState}></input>
                    <Classes teacherID={this.state.currentTeacherId} teacherName={this.state.currentTeacherName} classList={this.state.currentTeacherClasses} />
                </div>
            </div>
        )
    }
}

export default TeacherHome
// ReactDOM.render(<TeacherHome />, document.getElementById('app'));