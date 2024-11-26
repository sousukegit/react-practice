import { useState } from "react";
const Example = () => {
  const [countA,setCountA] = useState(0)
  return (
    <>
      <h3>練習問題</h3>
      <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p>
      このコメントアウトを外して利用！
        <CountResult title="カウント" count={countA}  />
        <CountUpdate num = {countA} setfunc ={setCountA} /> 
     
    </>
  );
};
const CountResult = ({title,count}) => <h3>{title}:{count}</h3>

const CountUpdate = ({setfunc}) => {
  
  const countUp = () => {
    setfunc(prev=>prev+1)
  };
  const countDown = () => {
    setfunc(prev=>prev-1)
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
