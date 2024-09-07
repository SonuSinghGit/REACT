//import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};


export default ParentComponent;