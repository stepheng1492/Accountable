import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ClassListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentClass = '',
        }
    }

    render() {
        return (
            <div>
                <h2>Class Name</h2>
            </div>
        )
    }
}