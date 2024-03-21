import React, { useEffect, useRef, useState } from 'react';

const Hooks = () => {
    const count = useRef(0);
    const inputRef = useRef(null);

    const btn = () => {
        // inputRef.current.focus();
        count.current++;
        console.log("Counter : ",count.current);
    }

    return (
        <>
            <input type = "text" Ref = {inputRef}/>
            <button type='button' onClick={btn}>Click</button>
        </>
    )
}

export default Hooks;