import React, { useState } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import "../../index.css";
import TLDRText from "./TLDR";
import XPText from "./XP";
import SkillsText from "./Skills";
import HobbiesText from "./Hobbies";
import Education from "./Education";
import media from "../../media";

const AboutCont = styled.div`
  width: 40%;
  margin-left: 5rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;

  ${media.between("smMobile", "tablet")`
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  `}

  ${media.between("tablet", "smScreen")`
  width: 92%;
  margin-left: 0;
  margin-right: 0;
  align-self: center;
  `}

  // ${media.between("smScreen", "mdScreen")`
  // width: 35%;
  // `}
`;

const AboutTitle = styled.h1`
  font-size: 4rem;
  display: flex;
  margin-top: 3rem;
  margin-left: 1rem;
  color: midnightblue;
  width: 22%;

  ${media.between("smMobile", "smScreen")`
  font-size: 4rem;
  width: 80%;
  justify-content: center;
  align-self: center;
  margin-left: 0;
  `}

  ${media.between("smScreen", "mdScreen")`
  font-size: 3.5rem;
  width: 100%;
  margin-left: 1rem;;
  `}
`;

const AboutHeader = styled.div`
  align-self: center;
  margin-top: 3rem;
  margin-left: 2rem;
  font-size: 1.2rem;
  width: 100%;

  ${media.between("smMobile", "smScreen")`
  margin-top: 0rem;
  margin-left: 0;
  width: 82%;
  `}
`;

const AboutContent = styled.div`
  margin-top: 4rem;
  // margin-left: 1.5rem;

  ${media.between("smMobile", "smScreen")`
  margin-left: 0;
  width: 80%;
  align-self: center;
  margin-bottom: 5rem;
  margin-right: 1.5rem;
  `}
`;

const { Panel } = Collapse;

console.log(window);

const Header = (props) => {
  console.log(props);
  if (props.selected) {
    return <p style={{ fontSize: "1.7rem" }}>{props.short}</p>;
  }

  return (
    <p
      style={{
        fontSize: "1.7rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {props.long}
    </p>
  );
};

const About = () => {
  const [state, setState] = useState([
    {
      short: "TLDR:",
      long:
        'TLDR: "Passion-driven webdev who loves building (socially) impactful and beautiful products, enjoys continually learning new technologies, spoken languages and artforms, and appreciates a satisfying hike or martial arts sparring match.',
      selected: false,
      text: TLDRText,
    },
    {
      short: "Skills:",
      long:
        'Skills: [ "JavaScript", "Python", "ReactJS", "NodeJs", "PostgreSQL", "Jest"...',
      selected: false,
      text: SkillsText,
    },
    {
      short: "Experience:",
      long:
        "Experience: \"Most recently, I've had the opportunity to intern with Connect Our Kids as a volunteer Team Lead...",
      selected: false,
      text: XPText,
    },
    {
      short: "Education:",
      long:
        "Education: [ {name: LambdaSchool: ...}, {name: CentralEuropeanUniv...",
      selected: false,
      text: Education,
    },
    {
      short: "Hobbies:",
      long:
        'Hobbies: [ "Krav Maga", "Carpentry", "Textile art", "Cooking and baking...',
      selected: false,
      text: HobbiesText,
    },
  ]);

  const changeHeaderMain = (keys) => {
    setState((prevState) => {
      const newState = prevState.map((h) => {
        h.selected = false;
        return h;
      });

      keys.forEach((k) => (newState[k].selected = true));
      return newState;
    });
  };

  return (
    <AboutCont>
      <AboutTitle>About</AboutTitle>
      <AboutHeader>
        <h3 style={{ color: "dimgrey" }}>
          Hi, I'm Anna! I'm passionate about creating and building, be it with
          code or any other medium. I'm a self-taught artist and crafter, and
          apply the same gusto for creating to web development projects.
          <br />
          <br /> When I'm not coding, I'm rolling with the punches at my Krav
          Maga studio, backpacking in West Texas, hanging with my hubslice Mike
          and pup-child Lyra, or
          cooking/gardening/reading/crafting/insert-introvert-hobby-here.
        </h3>
      </AboutHeader>
      <AboutContent>
        <Collapse
          onChange={changeHeaderMain}
          bordered={false}
          className="site-collapse-custom-collapse"
        >
          {state.map((h, idx) => (
            <Panel
              header={<Header {...h} />}
              key={idx}
              className="site-collapse-custom-panel"
            >
              {h.text}
            </Panel>
          ))}
        </Collapse>
      </AboutContent>
    </AboutCont>
  );
};

export default About;
