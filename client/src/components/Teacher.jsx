import React from 'react';

class Teacher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teacherName: this.props.teacherName
        }
    }

    render() {
        const { teacherName } = this.state;
        return (
            <div>
                <h2>Welcome {teacherName}</h2>
            </div>
        )
    }
}

export default Teacher;
