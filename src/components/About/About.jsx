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
  margin-left: 4rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;

  ${media.between("smMobile", "lgMobile")`
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  `}
`;

const AboutTitle = styled.h1`
  font-size: 4rem;
  display: flex;
  margin-top: 3rem;
  margin-left: 2rem;
  color: midnightblue;
  border-bottom: 1.5px solid lightgrey;
  width: 22%;

  ${media.between("smMobile", "lgMobile")`
  font-size: 4rem;
  width: 80%;
  justify-content: center;
  align-self: center;
  margin-left: 0;
  `}
`;

const AboutHeader = styled.div`
  align-self: center;
  margin-top: 6rem;
  margin-left: 2rem;
  font-size: 1.2rem;

  ${media.between("smMobile", "lgMobile")`
  margin-top: 2rem;
  margin-left: 0;
  width: 80%;
  `}
`;

const AboutContent = styled.div`
  margin-top: 4rem;
  margin-left: 1.5rem;

  ${media.between("smMobile", "lgMobile")`
  margin-left: 0;
  width: 80%;
  align-self: center;
  margin-bottom: 5rem;
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
      long: "TLDR: Lorem impsum blah blah blah blah blah blah..",
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
      long: "Experience: lorem ipsum blah blah blah blah blah blah blah...",
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
