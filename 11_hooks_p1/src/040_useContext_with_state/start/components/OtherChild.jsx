import { useContext } from "react";
import { MyContext } from "../Example";
const OtherChild = () => {
  const [value,setValue] = useContext(MyContext)

  const clickHandler = (e) => {
    console.log(value)
    const newValue = value + 1
    setValue(newValue);
  };

  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
      <h3>{value}</h3>
    </div>
  );
};

export default OtherChild;
