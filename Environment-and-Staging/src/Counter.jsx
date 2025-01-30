import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stInterval = setInterval(() => {
    //   console.log("render");
      setCount((prev)=>{
        // console.log(prev +1)
         return prev + 1
      });
    }, 1000);
console.log(stInterval)
    return () => clearInterval(stInterval);
  }, []);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default Counter;
