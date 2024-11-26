import Child from "./components/Child";
const fn = (str) => {return `hello ${str}`}
const obj = {name:"souske",age:222}
const Example = () => <Child color="green" num={123} fn ={fn} {...obj}/>;

export default Example;
