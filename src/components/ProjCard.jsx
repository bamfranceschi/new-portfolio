import React from "react";
import styled from "styled-components";

const CardCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjInfo = styled.div`
  display: flex
  flex-direction: column;
  margin-left: 3rem;
  margin-right: 3rem;
  // margin-top: 1rem;
`;

const ProjDesc = styled.p`
  font-size: 1.8rem;
  margin-right: 2rem;
`;

const InfoBar = styled.h6`
  font-size: 1.3rem;
  color: midnightblue;
  margin: 0;
`;

const LinksCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  font-size: 1.3rem;
`;

const BottomLine = styled.div`
  border-bottom: 1.5px solid lightgrey;
  width: 80%;
  margin-top: 1rem;
`;

const ProjCard = (props) => {
  return (
    <CardCont>
      <ProjInfo>
        <h1 style={{ color: "midnightblue", marginTop: "1.5rem" }}>
          {props.name}
        </h1>
        <h3
          style={{ color: "dimgrey", fontSize: "1.3rem" }}
        >{`${props.tech}`}</h3>
        <LinksCont>
          <a href={props.github} target="_" style={{ color: "dimgrey" }}>
            Github
          </a>
          <InfoBar>|</InfoBar>
          <a href={props.deploy} target="_" style={{ color: "dimgrey" }}>
            Deployed App
          </a>
        </LinksCont>
        <ProjDesc>{props.description}</ProjDesc>
        <BottomLine></BottomLine>
      </ProjInfo>
    </CardCont>
  );
};

export default ProjCard;
