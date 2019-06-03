import React from 'react';
import ClassListItem from './ClassListItem';

const Classes = props => (
  <div>
    <h4 display="inline-block">Your Current Classes</h4>
    <div>
      <h5>{props.classList.map(eachClass => <ClassListItem eachClass={eachClass} />)}</h5>
    </div>
  </div>
);

export default Classes;
