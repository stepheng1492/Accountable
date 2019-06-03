import React from 'react';
import axios from 'axios';

class CommentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };

    this.getComments = this.getComments.bind(this);
  }

  componentDidMount() {
    this.getComments()
      .then((data) => {
        this.setState({
          comments: data.data,
        });
      });
  }

  getComments() {
    const { student } = this.props;
    return axios.get('/comments', {
      params: {
        studentID: student.id,
      },
    });
  }


  render() {
    const { comments } = this.state;
    const { student } = this.props;
    return (
      <div>
        <h3>
          Comment History for
          {student.name}
        </h3>
        <table>
          <tr>
            <th>Date</th>
            <th>Text</th>
          </tr>
          {comments.map(comment => (
            <tr>
              <td>{comment.createdAt}</td>
              <td>{comment.comment}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default CommentHistory;
