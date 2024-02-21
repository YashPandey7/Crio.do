import React from 'react';

const Content = (props) => {
  return (
    <>
        <ul>
            <li>Email: {props.email}</li>
            <li>Name: {props.name}</li>
        </ul>
        <img src={props.image}/>
    </>
  );
}

export default Content;