import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => {
    setPerson({name:e.target.value,age:person.age})
  }
  const changeAge = (e) => {
    setPerson({name:person.name,age:e.target.value})
  }
  const reset = () => {
    setPerson({name:"",age:null})
  }
 
  return(
    <>
      <div>name:{person.name}</div>
      <div>age:{person.age}</div>

      <input type="text" 
        onChange={changeName}
      />
            <input type="number" 
        onChange={changeAge}
      />
      <div>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
};

export default Example;
