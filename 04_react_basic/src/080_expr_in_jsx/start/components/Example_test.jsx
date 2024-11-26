

const Example_test = () => {
  const title = "Sousuke!"
  const array = ["item1","item2","imte3"]
  const hello = (arg) => `${arg} fuc` 
  const jsx = <h3>tagtag</h3>
  console.log(jsx)
  return (
    <div>
      <h3>Hello explation {title.toUpperCase()}</h3>
      <div>{array}</div>
      <div>{hello('manabe')}</div>
      {<h3>jsx</h3>}
      {jsx}
    </div>

  );
};

export default Example_test;
