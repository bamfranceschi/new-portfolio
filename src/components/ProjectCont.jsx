import React from "react";
import ProjCard from "./ProjCard";
import ProjectData from "../data/projects.json";

const ProjectCont = () => {
  return (
    <div>
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
    </div>
  );
};

export default ProjectCont;
