import React, { useState } from "react";

const Form = () => {

    const [name, setname] = useState("");    
    const [fullname, setfullname] = useState("");

    const inputevent = (event) => {
        setname(event.target.value);
    }

    const clksubmit = (event) => {
        event.preventDefault();
        setfullname(name);
    }

    return(
        <>
            <form onSubmit={clksubmit}>
                <p style={{fontSize:"40px"}}>Hello {fullname}</p>
                <input type="text" placeholder="Enter your name ..." onChange={inputevent} value={name}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;