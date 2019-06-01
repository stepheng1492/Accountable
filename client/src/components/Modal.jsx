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
    console.log()
    axios.post('/comments', {
      // on bodt, need comment text
      studentID: this.props.currentStudent.id,
      comment: this.state.commentText,
    })
  }

  changeComment(e) {
    this.setState({
      commentText: e.target.value,
    })
  }

  getComments() {
    return axios.get('/comments', {
      params: {
        studentID: this.props.currentStudent.id,
      }
    })
  }


  componentDidMount() {
    this.getComments()
      .then((data) => {
        console.log(data);
        this.setState({
          comments: data.data,
        })
      })
  }
  
    render() {
        let whichRendered;
        if (this.state.history) {
            whichRendered = (<div>
                <h3>Comment History for {this.props.currentStudent.name}</h3>
                <table className="comentTable">
                  <thead>
                    <tr>
                    <td className="tableHead tableRows">Comment</td>
                    <td className="tableHead tableRows">Date</td>
                    </tr>
                  </thead>
                {this.state.comments.map(comment => {
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
            </div>);
            
        } else if (this.state.newComment) {
            whichRendered = (<div>
              <h5>Add Comment for {this.props.name}</h5>
              <input onChange={this.changeComment}></input>  
              <button onClick={this.submitComment}>Submit Comment</button>              
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





// // import Modal from 'react-bootstrap/Modal';
// // import Button from 'react-bootstrap/Button';
// const modal = props => {
//     return (

//         <div className="modal">
//         <header>Modal Test</header>
//         <section className="modal_content">
//             {props.children}
//         </section>
//         <section className="modal_actions">
//             <button>Close</button>
//             <button>Submit</button>
//         </section>
//     </div>
//         )
// }
// // const modal = props => {
// //     <div>
// //         <header>Modal Header Test</header>
// //         <section className="modal_contents" >
// //             {props.children}
// //         </section>
// //         <section className="modal_actions">
// //             <button>Close this page</button>
// //             <button>Submit Comment</button>
// //         </section>
// //     </div>
// // }

// export default modal;


// // class Modal extends React.Component {
// //     constructor(props, context) {
// //         super(props, context);

// //         this.handleShow = this.handleShow.bind(this);
// //         this.handleClose = this.handleClose.bind(this);

// //         this.state = {
// //             show: false,
// //         };
// //     }

// //     handleClose() {
// //         this.setState({ show: false });
// //     }

// //     handleShow() {
// //         this.setState({ show: true });
// //     }

// //     render() {
// //         return (
// //             <div>

// //                 <Button variant="primary" onClick={this.handleShow} />

// //                 <Modal show={this.state.show} onHide={this.handleClose}>
// //                     <Modal.Header closeButton>
// //                         <Modal.Title>Modal heading</Modal.Title>
// //                     </Modal.Header>
// //                     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
// //                     <Modal.Footer>
// //                         <Button variant="secondary" onClick={this.handleClose}>
// //                             Close
// //               </Button>
// //                         <Button variant="primary" onClick={this.handleClose}>
// //                             Save Changes
// //               </Button>
// //                     </Modal.Footer>
// //                 </Modal>
// //             </div>

// //         );
// //     }
// // }

// // // export default Modal;
