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

const AboutCont = styled.div`
  width: 45%;
  margin-left: 4rem;
  margin-right: 2rem;
`;

const AboutTitle = styled.h1`
  font-size: 4rem;
  display: flex;
  margin-top: 3rem;
  margin-left: 2rem;
  color: midnightblue;
  border-bottom: 1.5px solid lightgrey;
  width: 22%;
`;

const AboutHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 6rem;
  margin-left: 2rem;
  font-size: 1.2rem;
`;

const AboutContent = styled.div`
  margin-top: 4rem;
  margin-left: 1.5rem;
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
      long: "Skills: JavaScript Python TypeScript...",
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
      short: "Hobbies: [",
      long: "Hobbies: Krav Maga, Carpentry, Texti...",
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
          code or any other medium. As a full stack web developer, I build front
          ends using JavaScript, React and ReactNative, and back ends using
          NodeJS and Express.
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
