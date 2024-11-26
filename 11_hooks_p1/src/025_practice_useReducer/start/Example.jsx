import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = () => {}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
    type:"add"
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    
  };

  const numChangeHandler = (e) => {
    const newState = {...state};
    if(e.target.name === "a"){
      newState.a = e.target.value
    }

  }

  return (
    <>
    <h3>練習問題</h3>
    <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((option,index)=>{
          return(
            <option key={index}>{option}</option>
          )
        })}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
