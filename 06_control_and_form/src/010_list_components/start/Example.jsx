
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // const animalList = []
  // for(const animal of animals){
  //   animalList.push(<li key = {animal}>{animal}</li>)
  // }
  const animalListMap = animals.map((animal,index)=>{
    return <li key = {`${index}-${animal}`} data-key={index}>map,{animal}</li>
    }
  )
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animalListMap}
      </ul>
    </>
  );
};

export default Example;
