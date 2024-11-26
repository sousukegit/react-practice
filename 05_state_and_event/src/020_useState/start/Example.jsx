import { useState } from "react";

const Example = () => {
  let valArray = useState("hello")
  return (
    <>
      <input 
        onChange = {(e) => {
          const setFn = valArray[1];
          setFn(e.target.value)
        }
        }
      type="text" /> = {valArray}
    </>
  );
};

export default Example;
