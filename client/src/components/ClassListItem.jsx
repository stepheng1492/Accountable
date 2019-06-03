import React from 'react';
import Students from './Students';

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
    const { studentRender } = this.state;

    this.setState({
      studentRender: !studentRender,
    });
  }

  handleClassItemClick() {
    // call function that renders class's students
    this.changeStudentState();
    this.hideClassListItems();
  }

  hideClassListItems() {
    this.htmlCollection = document.getElementsByClassName('something-else');
    this.arrayCollection = Array.from(this.htmlCollection);

    this.arrayCollection.forEach((element) => {
      element.style.display = 'none';
    });
  }

  showClassListItems() {
    this.htmlCollection = document.getElementsByClassName('something-else');
    this.arrayCollection = Array.from(this.htmlCollection);
    this.arrayCollection.forEach((element) => {
      element.style.display = 'block';
    });
  }

  render() {
    const { studentRender } = this.state;
    const { eachClass } = this.props;
    return (
      <div>
        <ul className="studentList">
          <li className="something-else" onClick={this.handleClassItemClick}>
            {eachClass.name}
          </li>
          {studentRender
            ? (
              <Students
                showList={this.showClassListItems}
                changeState={this.changeStudentState}
                className={eachClass.name}
                classID={eachClass.id}
              />
            ) : null}
        </ul>
      </div>
    );
  }
}

export default ClassListItem;
