import { memo, useMemo } from "react";

const ChildMemo = ({ countB, onClick }) => {
  console.log("%cChild render", "color: red;");

  return useMemo(()=>{
    const random = Math.random()
    return (
      <div className="child">
        <h2>子コンポーネント領域</h2>
        <div>
          <button
            onClick={onClick}
          >
            ボタンB
          </button>
          <span>子のpropsに渡すstateを更新</span>
        </div>
        <div>{random}</div>
        <span>ボタンBクリック回数：{countB+random}</span>
      </div>
    );
  },[countB])
};

export default ChildMemo;