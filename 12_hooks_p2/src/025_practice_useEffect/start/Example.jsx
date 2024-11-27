import { useState,useEffect } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked)
  
  useEffect(()=>{
    checked && alert("click")
  },[checked])


  return (
    <>
      <label>
        <input type={'checkbox'} value={checked} onClick={() =>  setChecked((checked) => !checked)} />
        click me
      </label>
    </>
  );
};

export default Example;
