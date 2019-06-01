import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

class CommentModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
        history: false,
        newComment: false,
      };
  
      this.handleShow = () => {
        this.setState({ show: true });
      };
  
      this.handleHide = () => {
        this.setState({ show: false });
      };

      this.showHistory = this.showHistory.bind(this);
      this.newComment = this.newComment.bind(this);
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
  
    render() {
        let whichRendered;
        if (this.state.history) {
            whichRendered = <div>
                <p>History Test and other things that can be considered a test. These just 
                    keep going and going and going and going until I just can't think of anything
                    else to type in so I will just stop I guess. How much wood would a wood-chuck
                    chuck if a wood-chuck could chuck wood?
                </p>
            </div>
            
        } else if (this.state.newComment) {
            whichRendered = <div>
                <p>Fuzzy Wuzzee was a bear. Fuzzee Wuzzee had no hair. Fuzzee Wuzzee wasn't fuzzy, was he?</p>
                </div>
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
            <ModalHeader closeButton>
              <ModalTitle id="title">
              </ModalTitle>
              <Button className="btn btn-sm btn-dark" onClick={this.showHistory} id="history">View Comment History</Button>
              or
              <Button className="btn btn-sm btn-dark" onClick={this.newComment} id="newComment">Leave a Comment</Button>
            </ModalHeader>
            <ModalBody>
                <p>TEST</p>
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
