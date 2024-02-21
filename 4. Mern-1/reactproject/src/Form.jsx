import React, { useState } from "react";

const Form = () => {
    const [fullname, setfullname] = useState({
        fname:'',
        lname:'',
    });

    const inputevent = (e) => {
        const {name, value} = e.target;
        setfullname((b) => {
            return {
                ...b,
                [name]:value,
            }
        });
    }

    const submitform = (e) => {
        e.preventDefault();
    }


    return(
        <>
            <form onSubmit={submitform}>
                <h2>Hi, {fullname.fname} {fullname.lname}</h2>
                <input type="text" name="fname" placeholder="First name..." onChange={inputevent} value={fullname.fname}/>
                <input type="text" name="lname" placeholder="Last name..." onChange={inputevent} value={fullname.lname}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;