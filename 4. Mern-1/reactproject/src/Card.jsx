import React from 'react';

const Card = (props) => {
  return (
    <div style = {{backgroundColor:"#008080", margin:"10px", borderRadius:"5px", padding:"10px", textAlign:'center',width:"50px"}}>
        {/* <img src={props.imgSrc}/> */}
        <div>{props.name}</div>
        <div>{props.content}</div>
    </div>
  )
}

export default Card;