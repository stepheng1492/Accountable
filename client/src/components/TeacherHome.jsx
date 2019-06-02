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
      renderInput: false,
    };
    this.getTeacherData = this.getTeacherData.bind(this);
    this.submitClass = this.submitClass.bind(this);
    this.changeInputState = this.changeInputState.bind(this);
    this.submitClassHandler = this.submitClassHandler.bind(this);
    this.getClassData = this.getClassData.bind(this);
    this.renderClassInput = this.renderClassInput.bind(this);
  }

 

  submitClassHandler() {
    this.submitClass(this.state.inputState);
    this.renderClassInput();
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
            });
          });
      });
  }

  getTeacherData() {
    // axios get to teachers -- right now just get the one teacher in the database
    return axios.get('/teachers', {
      params: {
        email: this.props.user.email,
      }
    });
  }

  getClassData() {
    return axios.get('/classes', {
      params: {
        teacherID: this.state.currentTeacherId,
      }
    });
  }

  changeInputState(e) {
    this.setState({
      inputState: e.target.value,
    });
  }

  componentDidMount() {
    // show current teacher name and ID -- set the state
    this.getTeacherData()
      .then((data) => {
        const name = data.data[0].name;
        const id = data.data[0].id;
        this.setState({
          currentTeacherId: id,
          currentTeacherName: name,
        });
      })
      .then(() => {
        this.getClassData()
          .then((data) => {
            this.setState({
              currentTeacherClasses: data.data,
            });
          });
      });
  }

  renderClassInput() {
    this.setState({
      renderInput: !this.state.renderInput,   
    });
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="header">
            <h1 className="title">Accountable</h1>
            <p id="quote">"Experience teaches only the teachable." </p>
            <p id="quoteauthor">-Aldous Huxley</p>
            <button text-align="right" className="btn btn-sm" id="logoutButt" onClick={this.props.logout}>Log Out</button>
          </div>
        </div>
        <div className="greeting">
          <h4>Welcome Back, {this.state.currentTeacherName}</h4>
        </div>
        <br />
        <div className="classes">
          <button className="btn btn-dark btn-sm" onClick={this.renderClassInput}>Add Class</button>
          {this.state.renderInput 
            ? (<div>
            <input placeholder="new class name" onChange={this.changeInputState} />
            <button className="btn btn-dark btn-sm" onClick={this.submitClassHandler}>Submit</button>
          </div>)
            : null }
          <Classes teacherID={this.state.currentTeacherId} teacherName={this.state.currentTeacherName} classList={this.state.currentTeacherClasses} />
        </div>
      </div>
    );
  }
}

export default TeacherHome;
