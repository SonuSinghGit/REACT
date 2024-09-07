import { createContext } from 'react'
import ChildA from './ChildA';

const data1= createContext();
const data2=createContext();

function App() {
  const name="sonu singh";
  const gender="male";
  return(
    <>
    <data1.Provider value={name}>
      <data2.Provider value={gender}>
        
      <ChildA />
      </data2.Provider>
    </data1.Provider>
    </>
  )
}

export default App;
export{data1,data2};
