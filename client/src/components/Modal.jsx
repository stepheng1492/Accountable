import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import axios from 'axios';

const moment = require('moment');


class CommentModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      history: false,
      newComment: false,
      commentText: '',
      comments: [],
      textMessageText: '',
    };
    this.handleShow = () => {
      this.setState({ show: true });
    };
    this.handleHide = () => {
      this.setState({ show: false });
    };

    this.showHistory = this.showHistory.bind(this);
    this.newComment = this.newComment.bind(this);
    this.getComments = this.getComments.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.changeComment = this.changeComment.bind(this);
    this.changeText = this.changeText.bind(this);
    this.sendText = this.sendText.bind(this);
  }

  showHistory() {
    this.setState({
      history: true,
      newComment: false
    })
  }

  newComment() {
    this.setState({
      newComment: true,
      history: false,
    })
  }

  submitComment() {
    axios.post('/comments', {
      studentID: this.props.currentStudent.id,
      comment: this.state.commentText,
    })
      .then(() => {
        this.getComments()
          .then((data) => {
            this.setState({
              comments: data.data,
            });
          });
      });
  }

  changeComment(e) {
    this.setState({
      commentText: e.target.value,
    });
  }

  changeText(e) {
    this.setState({
      textMessageText: e.target.value,
    });
  }

  sendText() {
    // make post request to server
    let phone = this.props.currentStudent.phone.replace(/-/g, "");
    phone = "+1" + phone
    
    axios.post('/texts', {
      phone,
      message: this.state.textMessageText,
    });
  }


  getComments() {
    return axios.get('/comments', {
      params: {
        studentID: this.props.currentStudent.id,
      },
    });
  }


  componentDidMount() {
    this.getComments()
      .then((data) => {
        this.setState({
          comments: data.data,
        });
      });
  }

  render() {
    let whichRendered;
    if (this.state.history) {
      whichRendered = (
        <div>
          <h3>Comment History for {this.props.currentStudent.name}</h3>
          <table className="comentTable">
            <thead>
              <tr>
                <td className="tableHead tableRows">Comment</td>
                <td className="tableHead tableRows">Date</td>
              </tr>
            </thead>
            {this.state.comments.map((comment) => {
              return (
                <tbody>
                  <tr>
                    <td className="tableRows">{comment.comment}</td>
                    <td className="tableRows">{moment().format('ddd, MMM, Do')}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      );
            
    } else if (this.state.newComment) {
      whichRendered = (<div>
        <h5>Add Comment for {this.props.name}</h5>
        <div>
          <input onChange={this.changeComment} />
          <button onClick={this.submitComment}>Submit Comment</button>        
        </div>
        <div>
        <input onChange={this.changeText}/>
        <button onClick={this.sendText}>Send Text</button>
          </div>     
      </div>);
    }
    return (
      <>
        <Button variant="dark" onClick={this.handleShow} className="btn btn-sm">
          {this.props.name}'s Comments
        </Button>  
        <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
          >
          <ModalHeader >
            <ModalTitle id="title">
            </ModalTitle>
            <Button className="btn btn-sm btn-dark" onClick={this.showHistory} id="history">View Comment History</Button>
              
            <Button className="btn btn-sm btn-dark" onClick={this.newComment} id="newComment">Leave a Comment</Button>
          </ModalHeader>
          <ModalBody>
            {whichRendered}
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleHide} className="btn btn-sm btn-dark">Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default CommentModal;
