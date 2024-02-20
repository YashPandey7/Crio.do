import React, { useState } from 'react';

const Increment = () => {
    const [count, setCount] = useState(0);
    const Incre = () => {
        setCount(count+1);
    }
    const Decre = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }
  
    return (
    <>
        <p>{count}</p>
        <button onClick={Incre} style={{cursor : "pointer"}}>+</button>
        <button onClick={Decre} style={{cursor : "pointer"}}>-</button>
    </>
  )
}

export default Increment;