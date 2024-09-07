// import React from "react";
import Child from "./Child";
const Parent=()=>{

    const data="data transfer scussesful";
    const data1="data is transfer from parent to child";
    return(
        <div>
          <h1>Parent component</h1>
          <Child data = {data}/>
          <Child data1={data1}></Child>
        </div>
    );
}
export default Parent;