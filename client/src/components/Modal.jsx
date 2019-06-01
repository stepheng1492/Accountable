import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

// import '../../styles/styles.css'
class TestModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
  
      this.handleShow = () => {
        this.setState({ show: true });
      };
  
      this.handleHide = () => {
        this.setState({ show: false });
      };
    }
  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Student Comments
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ModalHeader closeButton>
              <ModalTitle id="example-custom-modal-styling-title">
                Custom Modal Styling
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
                Mollitia reiciendis porro quo magni incidunt dolore amet atque
                facilis ipsum deleniti rem!
              </p>
            </ModalBody>
          </Modal>
        </>
      );
    }
  }
  
//   render(<Example />);
export default TestModal;





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
