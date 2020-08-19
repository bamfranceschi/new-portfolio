import React from "react";
import styled from "styled-components";

const CardCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjInfo = styled.div`
  display: flex
  flex-direction: column;
  margin: 3rem;
`;

const ProjDesc = styled.p`
  font-size: 1.8rem;
`;

const ProjCard = (props) => {
  return (
    <CardCont>
      <ProjInfo>
        <h1 style={{ color: "midnightblue" }}>{props.name}</h1>
        <h3 style={{ color: "midnightblue" }}>{`${props.tech}`}</h3>
        <ProjDesc>{props.description}</ProjDesc>
        <a href={props.github} target="_" style={{ color: "midnightblue" }}>
          Github
        </a>
        <a href={props.deploy} target="_" style={{ color: "midnightblue" }}>
          Deployed App
        </a>
      </ProjInfo>
      {/* <ProjImg src={props.image} alt="project"></ProjImg> */}
    </CardCont>
  );
};

export default ProjCard;
