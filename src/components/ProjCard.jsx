import React from "react";
import styled from "styled-components";
import ProjectAction from "../components/ProjAction";

const CardCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjInfo = styled.div`
  display: flex
  flex-direction: column;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 1rem;
`;

const ProjDesc = styled.p`
  font-size: 1.7rem;
  margin-right: 2rem;
  width: 90%;
  margin-top: 0.5rem;
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

const Logo = styled.img`
  width: 70px
  height: 70px
`;

const HeadLine = styled.div`
  display: flex;
  // border: 1px solid red;
  align-items: center;
  width: 85%;
`;

const ProjCard = (props) => {
  return (
    <CardCont>
      <ProjInfo>
        <HeadLine>
          <Logo
            alt={"project logo"}
            src={require(`../images/${props.logo}`)}
          ></Logo>
          <h1
            style={{
              color: "midnightblue",
              marginTop: "1.5rem",
              marginLeft: "2rem",
            }}
          >
            {props.name}
          </h1>
        </HeadLine>
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
        <ul>
          {props.actions.map((a, idx) => (
            <ProjectAction key={idx} a={a} />
          ))}
        </ul>
        <BottomLine></BottomLine>
      </ProjInfo>
    </CardCont>
  );
};

export default ProjCard;
