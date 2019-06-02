import React from 'react';
import Button from 'react-bootstrap/Button';
import ClassListItem from './ClassListItem.jsx';


// classes is list of classes by teacher

const Classes = (props) => {
    return (
        <div>
            <h4 display="inline-block">Your Current Classes</h4>
            <div>
                <h5>{props.classList.map((eachClass) => <ClassListItem eachClass={eachClass} />)}</h5>
            </div>
        </div>
    );
}

export default Classes;