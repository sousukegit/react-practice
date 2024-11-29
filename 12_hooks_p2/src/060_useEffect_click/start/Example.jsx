import { useEffect, useState, useLayoutEffect } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);


  return (
    <>
      {isDisp && <Timer/>}
     
      <button onClick={() => setIsDisp(prev => !prev)}>{isDisp ? '非表示' : '表示'}</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let intervalId = null;
    // console.log('init');
    if(isRunning) {
    
    intervalId = window.setInterval(() => {
      // console.log('interval running');
      setTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      //unmoutされたときとisRunningがfalseのときに実行される
      window.clearInterval(intervalId)
    }
  }, [isRunning])
  
  useEffect(() => {
    // console.log('updated');
    
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);

    return () => {
      // debugger
      // console.log('updated end');
    }
  }, [time]);

  

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if(!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  return (
    <>
      <h3>
        <time>{time}</time>
      <span>秒経過</span>
    </h3>
     <div>
     <button onClick={() => setIsRunning(prev => !prev)}>{isRunning ? '停止' : 'スタート'}</button>
      <button onClick={() => setTime(0)}>リセット</button>
      </div>
    </>
  );
};

export default Example;
