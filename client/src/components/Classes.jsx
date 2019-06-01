import React from 'react';
import ClassListItem from './ClassListItem.jsx';

// classes is list of classes by teacher

const Classes = (props) => {
    return (
        <div>
            <h3>{props.teacherName}'s Classes</h3>
            <div>
                <h4>{props.classList.map((eachClass) => <ClassListItem eachClass={eachClass} />)}</h4>
            </div>
        </div>
    );
}

export default Classes;