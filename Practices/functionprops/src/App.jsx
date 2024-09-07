//import React from 'react';

const ChildComponent = ({onClick}) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default ChildComponent;