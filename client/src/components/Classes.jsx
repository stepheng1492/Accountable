import React from 'react';
import axios from 'axios';

// classes is list of classes by teacher

const Classes = (props) => {
    return (
        <div>
            <h3>{props.teacherName}'s Classes</h3>
        </div>
    );
}

export default Classes;