import React from 'react';
import ClassListItem from './ClassListItem.jsx';

// classes is list of classes by teacher

const Classes = (props) => {
    return (
        <div>
            <h4>{props.teacherName}'s Classes</h4>
            <div>
                <h5>{props.classList.map((eachClass) => <ClassListItem eachClass={eachClass} />)}</h5>
            </div>
        </div>
    );
}

export default Classes;