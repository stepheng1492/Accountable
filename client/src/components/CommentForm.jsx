import React from 'react';
import axios from 'axios';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
        };

        this.submitComment = this.submitComment.bind(this);
        this.changeComment = this.changeComment.bind(this);
    }

    submitComment() {
        axios.post('/comments', {
            // on bodt, need comment text
            studentID: this.props.student.id,
            comment: this.state.commentText,
        })
    }

    changeComment(e) {
        this.setState({
            commentText: e.target.value,
        })
    }
    
        render () {
            return (
                <div>
                    <h4>Enter Comment for {this.props.student.name}</h4>
                    <input onChange={this.changeComment} placeholder="enter comment here"/>
                    <button onClick={this.submitComment}>submit</button>
                </div>
            );
        }
}


export default CommentForm