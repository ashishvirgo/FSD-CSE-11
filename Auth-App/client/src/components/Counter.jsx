import { useEffect, useRef, useState } from "react";
const Counter = () => {
    // let count=0;
    const [count,setCount]=useState(0);
    const [message,setMessage]=useState("");
    const renderCount=useRef(0);
    useEffect(()=>{
        ++renderCount.current;
     setMessage(`Upadated Count=${count}`)
    },[count])
    function increment(){
        // ++count;
        setCount(count+1);
       console.log("Count=",count); 
    }
    const decrement=()=>{
        // --count;
        setCount(count-1);
        console.log("Count=",count);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <div className="counter">
      <button className="btn" onClick={increment}>+</button>
      <div className="count">{count}</div>
      <button className="btn" onClick={decrement}>-</button>
    </div>
    <h2>{message}</h2>
    <h3>Render Count={renderCount.current}</h3>
    </div>
  )
}

export default Counter
