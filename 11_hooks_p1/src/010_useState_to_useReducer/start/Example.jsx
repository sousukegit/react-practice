import { useReducer,useState } from "react";

const Example = () => {
  const [count,setCount] = useState(0)
  const [rstate, dispatch] = useReducer((prev,action) =>{
   if(action.type === "+"){
    return ++prev
   }
   else{
    return --prev
   }
   
  } ,0)
  return (
    
    <>
    <div>
      <div>usestate</div>
      <button onClick={()=>{setCount(prev=>++prev)}}>+</button>
      <p>{count}</p>
    </div>
    <div>
      <div>useReduce</div>
      <button onClick={()=>{dispatch({type:"+"})}}>+</button>
      <button onClick={()=>{dispatch({type:"-"})}}>-</button>
      <p>{rstate}</p>

    </div>
    </>
  );
};

export default Example;
