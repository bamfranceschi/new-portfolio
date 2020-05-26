import React from "react";

const ProjCard = (props) => {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <h3>{props.tech}</h3>
        <h5>{props.description}</h5>
        <a href={props.github}>Github</a>
        <a href={props.deploy}>Deployed App</a>
      </div>
      <img src={props.image} alt="project"></img>
    </>
  );
};

export default ProjCard;
