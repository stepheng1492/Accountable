import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        
        this.submitComment = this.submitComment.bind(this);
    }

    submitComment() {
        console.log('clicked');
    }
    
        render () {
            return (
                <div>
                    <h4>Enter Comment for {this.props.student.name}</h4>
                    <input placeholder="enter comment here"/>
                    <button onClick={this.submitComment}>submit</button>
                </div>
            );
        }
}


export default CommentForm