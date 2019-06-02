import React from 'react';
import axios from 'axios';
import Students from './Students.jsx'

class ClassListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentRender: false, 
    };
    this.handleClassItemClick = this.handleClassItemClick.bind(this);
    this.changeStudentState = this.changeStudentState.bind(this);
    this.hideClassListItems = this.hideClassListItems.bind(this);
    this.showClassListItems = this.showClassListItems.bind(this);
  }

  changeStudentState() {
    this.setState({
      studentRender: !this.state.studentRender,
    });
  }

  handleClassItemClick() {
    // call function that renders class's students
    this.changeStudentState();
    this.hideClassListItems();
  }

  hideClassListItems() {
    const htmlCollection = document.getElementsByClassName('something-else');
    const arrayCollection = Array.from(htmlCollection);
      arrayCollection.forEach(element => {
      element.style.display = 'none';
    })
  }

  showClassListItems() {
    const htmlCollection = document.getElementsByClassName('something-else');
    const arrayCollection = Array.from(htmlCollection);
    console.log(arrayCollection);
    arrayCollection.forEach(element => {
      element.style.display = 'block';
    })
  }

  render() {
    return (
        <div>
                <ul className="studentList">
          <li className="something-else" onClick={this.handleClassItemClick} > {this.props.eachClass.name}</li>
                    {this.state.studentRender ? <Students showList={this.showClassListItems} changeState={this.changeStudentState} className={this.props.eachClass.name} classID={this.props.eachClass.id} /> : null}
                </ul>
            </div>
    );
  }

}

export default ClassListItem;