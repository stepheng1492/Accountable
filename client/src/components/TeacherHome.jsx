import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class TeacherHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTeacherId: 0,
            currentTeacherName: '',
        };
        this.getTeacherData = this.getTeacherData.bind(this);
    }

    getTeacherData() {
        // axios get to teachers -- right now just get the one teacher in the database
       return axios.get('/teachers')
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
    }

    render() {
        return (
            <div>
                <h1>Accountable</h1>
                <h4>Teacher Name: {this.state.currentTeacherName}</h4>
                <h5>Teacher ID: {this.state.currentTeacherId}</h5>
                <div>
                    <input placeholder="add class here"></input>
                    <button>Add Class</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<TeacherHome />, document.getElementById('app'));