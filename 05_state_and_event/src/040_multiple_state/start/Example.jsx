import { useState } from "react";
const Example = () => {
    const [countNum,setCountA] = useState(0)
    const [countNumB,senCountB] = useState(10)
  return(
    <>
        <p>ボタンを{countNum}回推しました</p>
        <button onClick={(e) => {
                setCountA(countNum+1)
        }}>botun</button>

        <p>ボタンを{countNumB}回推しました</p>
        <button onClick={(e) => {
                senCountB(countNumB+1)
        }}>botunB</button>
    </>
  )
};

export default Example;
