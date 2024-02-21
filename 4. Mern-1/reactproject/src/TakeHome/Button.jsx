import React, { useState } from 'react';
import Content from './Content';
import axios from 'axios';


const Button = (props) => {

    const [userData, setUserData] = useState('');

    const redirect = async() => {
        try{
            const apidata = await axios.get(`https://reqres.in/api/users/${props.num}`);
            const actualdata = await apidata.data.data;
            const fullname = actualdata.first_name + " " + actualdata.last_name;
            console.log(fullname);
            setUserData({ name: fullname, email: actualdata.email, image: actualdata.avatar });
        }catch(err){
            alert("Failed to fetch data!");
        }
    }

  return (
    <>
        <button type='button' onClick={redirect}>{props.num}</button>
        {userData && <Content name={userData.name} email={userData.email} image={userData.image} />}
    </>
  );
}

export default Button;