//import ChildC from './ChildC';
import { data1 } from './App';
function ChildC1(){
    return(
        <>
           <data1.Consumer>
            {
                (name)=>{
                    return(
                        <h1>my name is:{name}</h1>
                    )
                }

            }
           </data1.Consumer>
        </>
        
        
    )
}
export default ChildC1;