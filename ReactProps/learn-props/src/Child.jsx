// import React from "react";
const Child = (props) => {

    return(
        <div>
            <h3>this is child component data within child.jsx</h3> 
            <h5>{props.data}</h5>
            <h5>{props.data1}</h5>

        </div>
    );
}

export default Child;