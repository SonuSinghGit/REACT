//import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'


// const handleClick=()=>{
//   alert("count clicked")
// }

// function App() {
//   const [count, setCount] = useState(100)

//   return (
//     <>
//     <h3>Lets understand states</h3>
//     <div>The count is {count}</div>
//     <button onClick={()=> {setCount(count-1)}}>Update count</button>
//     <button onClick={handleClick}>click me</button>
//     </>
//   )
// }

// export default App
//import React, { useState } from 'react';

 
// function App() {
//     const [click, setClick] = useState(0);
//     return (
//         <div>
//             <p>You have clicked {click} times!</p>
 
//             <p>The number of times you have clicked
//                 is {click % 2 == 0 ? 'even!' : 'odd!'}</p>
 
//             <button onClick={() => setClick(click => click + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// export default App;

import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That is right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
