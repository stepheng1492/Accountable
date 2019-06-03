import React from 'react';
// eslint-disable-next-line import/extensions
import ClassListItem from './ClassListItem.jsx';

// classes is list of classes by teacher

const Classes = (props) => {
  const { classList } = props;
  return (
    <div>
      <h4 display="inline-block">Your Current Classes</h4>
      <div>
        <h5>{classList.map(eachClass => <ClassListItem key={eachClass.id} eachClass={eachClass} />)}</h5>
      </div>
    </div>
  );
};
export default Classes;
