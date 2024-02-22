import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [imgsrc, setImgSrc] = useState("s/image")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apidata = await axios(`https://dog.ceo/api/breed${imgsrc}/random`);
                const actualdata = await apidata.data;
                document.getElementById("demo").innerHTML = `
                    <img src= "${actualdata.message}"/>
                `;
            } catch (error) {
                alert("Image not found!");
            }
        }
        fetchData();
    }, [imgsrc]);
    
    const selectvalue = (e) => {
        setImgSrc(e.target.value);
    }

    const handleClick = async() => {
        try {
            const apidata = await axios(`https://dog.ceo/api/breed${imgsrc}/random`);
            const actualdata = await apidata.data;
            document.getElementById("demo").innerHTML = `
                <img src= "${actualdata.message}"/>
            `;
        } catch (error) {
            alert("Image not found!");
        }
    }
   

    return (
        <>
            Select a breed : 
            <select onChange={selectvalue}>
                <option value="s/image">Random</option>
                <option value="/beagle/images">Beagle</option>
                <option value="/boxer/images">Boxer</option>
                <option value="/dalmatian/images">Dalmatian</option>
                <option value="/husky/images">Husky</option>
            </select>
            <br/>
            <p id="demo"></p>
            <button onClick={handleClick}>Next</button>
        </>
    );
}

export default Home;