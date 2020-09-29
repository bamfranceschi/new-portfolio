import React from "react";
import styled from "styled-components";
import ProjectAction from "../components/ProjAction";
import media from "../media";

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

  ${media.between("smMobile", "smScreen")`
  align-items: center;
  `}
`;

const ProjDesc = styled.p`
  font-size: 1.7rem;
  margin-right: 2rem;
  width: 90%;
  margin-top: 0.5rem;

  ${media.between("smMobile", "smScreen")`
  margin-right: 0rem;
  // border: 1px solid red;
  // text-align: center;
  justify-content: center;
  width: 83%;
  `}
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

  ${media.between("smMobile", "tablet")`
  font-size: 1.4rem;

  `}
`;

const BottomLine = styled.div`
  border-bottom: 1.5px solid lightgrey;
  width: 85%;
  margin-top: 1.5rem;
`;

const Logo = styled.img`
  width: 70px
  height: 70px

  ${media.between("smMobile", "tablet")`
  width: 50px
  height: 50px
  margin-top: 1rem;
  `}

  ${media.between("tablet", "smScreen")`
  width: 55px
  height: 55px
  margin-top: 1rem;
  `}
`;

const HeadLine = styled.div`
  display: flex;
  align-items: center;
  width: 85%;

  ${media.between("smMobile", "smScreen")`
  justify-content: center;
  width: 100%;
  `}

  ${media.between("smScreen", "mdScreen")`
  justify-content: flex-start;
  width: 100%;
  `}
`;

const ProjectName = styled.h1`
  color: midnightblue;
  margin-top: 1.5rem;
  margin-left: 2rem;

  ${media.between("smMobile", "mdScreen")`
  font-size: 2.3rem;
  margin-left: 1rem;
  `}
`;

const TechStack = styled.h3`
  color: dimgrey;
  font-size: 1.3rem;

  ${media.between("smMobile", "smScreen")`
  font-size: 1.5rem;
  text-align: center;
  `}
`;

const CardUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Link = styled.a`
  &:hover {
    color: #0076ff !important;
  }
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
          <ProjectName>{props.name}</ProjectName>
        </HeadLine>
        <TechStack>{`${props.tech}`}</TechStack>
        <LinksCont>
          <Link href={props.github} target="_" style={{ color: "dimgrey" }}>
            Github
          </Link>
          <InfoBar>|</InfoBar>
          <Link href={props.deploy} target="_" style={{ color: "dimgrey" }}>
            Deployed App
          </Link>
        </LinksCont>
        <ProjDesc>{props.description}</ProjDesc>
        <CardUl>
          {props.actions.map((a, idx) => (
            <ProjectAction key={idx} a={a} />
          ))}
        </CardUl>
        <BottomLine></BottomLine>
      </ProjInfo>
    </CardCont>
  );
};

export default ProjCard;
