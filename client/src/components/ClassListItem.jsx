import React from 'react';
import axios from 'axios';
import Students from './Students.jsx'

class ClassListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         studentRender: false, 
        }
        this.handleClassItemClick = this.handleClassItemClick.bind(this);
        this.changeStudentState = this.changeStudentState.bind(this);
    }

    changeStudentState() {
        this.setState({
            studentRender: !this.state.studentRender,
        })        
    }

    handleClassItemClick() {
        // call function that renders class's students
        this.changeStudentState()
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <ul className="studentList">
                <li onClick={this.handleClassItemClick}>
=======
                <ul>
                <li className="something-else" onClick={this.handleClassItemClick}>
>>>>>>> 3df17b273b6e9985ddf9052902d01e6262a90fa6
                    {this.props.eachClass.name}
                </li>
                {this.state.studentRender ? <Students className={this.props.eachClass.name} classID={this.props.eachClass.id}/> : null}
                </ul>
                    
            </div>
        )
    }
}

export default ClassListItem;