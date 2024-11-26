import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal,setFilterVal] = useState("");
  return (
    <>
      <input type="text" value={filterVal} onChange={(e)=>{setFilterVal(e.target.value)}}/>
      <h3>配列のフィルター</h3>
      <ul>
        {animals
          .filter(animal=> animal.indexOf(filterVal) !== -1)
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
