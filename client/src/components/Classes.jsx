import React from 'react';
import ClassListItem from './ClassListItem.jsx';
import Button from 'react-bootstrap/Button';


// classes is list of classes by teacher

const Classes = (props) => {
    return (
        <div>
            {/* <Button className="btn btn-sm btn-dark outline-danger">Add A Class</Button> */}
            <h4 display="inline-block">Your Current Classes</h4>
            <div>
                <h5>{props.classList.map((eachClass) => <ClassListItem eachClass={eachClass} />)}</h5>
            </div>
        </div>
    );
}

export default Classes;