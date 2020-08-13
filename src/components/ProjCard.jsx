import React from "react";
import styled from "styled-components";

const CardCont = styled.div`
  display: flex;
`;

const ProjInfo = styled.div`
  display: flex
  flex-direction: column;
  margin: 4rem;
  width: 50%
`;

const ProjImg = styled.img`
  width: 40%;
  margin: 4rem;
`;

const ProjDesc = styled.p`
  font-size: 1.8rem;
`;

const ProjCard = (props) => {
  return (
    <CardCont>
      <ProjInfo>
        <h1>{props.name}</h1>
        <h3>{`${props.tech}`}</h3>
        <ProjDesc>{props.description}</ProjDesc>
        <a href={props.github}>Github</a>
        <a href={props.deploy}>Deployed App</a>
      </ProjInfo>
      <ProjImg src={props.image} alt="project"></ProjImg>
    </CardCont>
  );
};

export default ProjCard;
