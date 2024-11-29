import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];
const calculateMap = {
  add: (a,b) => a + b,
  minus: (a,b) => a - b,
  divide: (a,b) => a / b,
  multiply: (a,b) => a * b,
}

const reducer = (state,{type,payload}) => {

 const newState = {...state}
 if(type === "change"){
  newState[payload.name] = payload.value
  return newState
 }

 if(type === "calculate"){
  newState.type = payload.value
  newState.result = calculateMap[payload.value](newState.a,newState.b)
 return newState
 }
}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
    type:"add"
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({type:"calculate",payload:{value:e.target.value}})
  };

  const numChangeHandler = (e) => {
    dispatch({type:"change",payload:{value:e.target.value,name:e.target.name}})
  }

  return (
    <>
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
        {CALC_OPTIONS.map((option)=>{
          return(
            <option key={option} value={option}>{option}</option>
          )
        })}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
