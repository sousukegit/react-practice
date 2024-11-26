import { useState } from "react";


const Example = () => {
    const [num , setNum] = useState(0);
    const [numD , setDownNum] = useState(0);
    
    const countUp = () => {
        // setNum(num+1);
        setNum (prevState => prevState + 1)
        console.log(num)
        
    }
    const countDown = () => {
        setDownNum(numD-1)
    }
    return(
        <>
        <p>現在のカウント数:{num}</p>
        <button onClick ={countUp} >+</button>
        <p>現在のカウント数:{numD}</p>
        <button onClick ={countDown} >-</button>
        </>
    )

  
};

export default Example;
