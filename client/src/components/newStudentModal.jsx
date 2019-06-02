import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import axios from 'axios';

class StudentModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      history: false,
      newComment: false,
      Name: '',
      Guardian: '',
      Email: '',
      Phone: '',
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.infoSet = this.infoSet.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { Name, Guardian, Email, Phone } = this.state;
    console.log(this.props.classID);
    axios.post('/students', {
      name: Name,
      parentName: Guardian,
      email: Email,
      phone: Phone,
      classID: this.props.classID,
    })
      .then(() => {
        // re set teh state of students
        return axios.get('/students', {
          params: {
            classID: this.props.classID,
          },
        })
          .then((data) => {
            this.props.studentChange(data.data);
          })
      });

    // clear form fields on submit
    this.setState({
      Name: '',
      Guardian: '',
      Email: '',
      Phone: '',
    });
  }

  infoSet(event) {
    this.setState({
      [event.target.placeholder]: event.target.value,
    });
  }

  render() {
    return (
      <div>
          <Button variant="dark" onClick={this.handleShow} className="btn btn-sm">
                    Add A Student
        </Button>

          <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
                >
          <ModalHeader closeButton>
            <ModalTitle id="title">
            </ModalTitle>
            <h5>Please enter the following student information: </h5>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit} className="newStudenForm">
              <label>
                      <input value={this.state.Name} type="text" placeholder="Name" onChange={this.infoSet} />
                      <br />
                      <input value={this.state.Guardian} type="text" placeholder="Guardian" onChange={this.infoSet} />
                      <br />
                      <input value={this.state.Email} type="text" placeholder="Email" onChange={this.infoSet} />
                      <br />
                      <input value={this.state.Phone} type="text" placeholder="Phone" onChange={this.infoSet} />
                    </label>
              <br />
              <input type="submit" value="Submit" />
            </form>

          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleHide} className="btn btn-sm btn-dark">Close</Button>
          </ModalFooter>
        </Modal>
        </div>
    );
  }
}

export default StudentModal;