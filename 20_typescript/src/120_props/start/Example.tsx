
import Compornent from "./Hello";

const {Hello,Btn} = Compornent;

const Example:React.FC = () => {
  const aisatu = {
    japan:"hello"
  };

  return(
    <>
     <div>aaaaa</div>
     <Hello text={aisatu}>kodokodo</Hello>
     <Btn func={(text)=>{console.log(text)}}></Btn>
    </>
  )
  // 練習用
};

export default Example;
