import React from "react";
import ProjCard from "./ProjCard";
import ProjectData from "../data/projects.json";
import styled from "styled-components";
import media from "../media";

const ProjParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 53%;
  color: midnightblue;

  ${media.between("smMobile", "smScreen")`
  width: 100%
  `}

  ${media.between("smScreen", "mdScreen")`
  width: 49%;
  margin-right: 1rem;
  `}
`;

const Title = styled.h1`
  font-size: 4rem;
  display: flex;
  margin-top: 3rem;
  color: midnightblue;
  // border-bottom: 1.5px solid lightgrey;
  width: 80%;
  margin-left: 3rem;

  ${media.between("smMobile", "smScreen")`
  font-size: 3.5rem;
  justify-content: center;
  align-self: center;
  width: 80%;
  `}

  ${media.between("smScreen", "mdScreen")`
  font-size: 3.5rem;
  width: 100%;
  justify-content: flex-start;
  `}
`;

const ProjectCont = () => {
  return (
    <ProjParent>
      <Title>Projects</Title>
      {ProjectData.map((p) => (
        <ProjCard
          name={p.name}
          description={p.description}
          image={p.image}
          tech={p.tech_stack}
          github={p.github}
          deploy={p.deploy}
          actions={p.actions}
          logo={p.logo}
        />
      ))}
    </ProjParent>
  );
};

export default ProjectCont;
