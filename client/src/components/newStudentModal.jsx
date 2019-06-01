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
        console.log(Name, Guardian, Email);

        // axios.post('/students', {
        //     Name,
        //     Guardian,
        //     email: Email,
        //     phone: Phone,
        //     classID: this.props.classID,
        // })
    }

    infoSet(event) {
        console.log(event.target.placeholder)
        this.setState({
            [event.target.placeholder]: event.target.value
        })
    }

    render() {
        return (
            <>
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
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type="text" placeholder="Name" onChange={this.infoSet}/>
                                <br />
                                <input type="text" placeholder="Guardian" onChange={this.infoSet}/>
                                <br />
                                <input type="text" placeholder="Email" onChange={this.infoSet}/>
                                <br />
                                <input type="text" placeholder="Phone" onChange={this.infoSet}/>
                            </label>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handleHide} className="btn btn-sm btn-dark">Close</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default StudentModal;





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
