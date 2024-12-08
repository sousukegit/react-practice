import { useState } from "react";
import Clild from "./Child";

const Example = () => {
  const [countA,setCountA] = useState(0)
  const [countB,setCountB] = useState(0)
  return (
    <div className="parent">
        <h3>React.memoで子コンポーネントの再レンダリングを防止</h3>
        <button onClick={()=>{setCountA((prev)=>prev+1)}}>A</button>
        <button onClick={()=>{setCountB((prev)=>prev+1)}}>B</button>
        <p>countA:{countA}</p>
        <div>
          <Clild countB={countB}></Clild>
        </div>

    </div>

  );
};

export default Example;
