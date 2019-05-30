import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ClassListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li>
                    {this.props.eachClass.name}
                </li>
            </div>
        )
    }
}

export default ClassListItem;