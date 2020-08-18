import React from "react";
import ProjCard from "./ProjCard";
import ProjectData from "../data/projects.json";
import styled from "styled-components";

const ProjParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48%;
`;

const Title = styled.h1`
  font-size: 4rem;
  display: flex;
  margin: 3rem;
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
        />
      ))}
    </ProjParent>
  );
};

export default ProjectCont;
