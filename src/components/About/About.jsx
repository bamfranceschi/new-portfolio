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
// import AboutCollapse from "./AboutCollapse";

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
    return <p>{props.short}</p>;
  }

  return <p>{props.long}</p>;
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
    // {
    //   short: "LambdaSchool: {",
    //   long: "LambdaSchool: {SubjectOfStudy: Full Stack Web Developmen..",
    //   selected: false,
    //   text: LambdaSchool,
    // },
    // {
    //   short: "CentralEuropeanUniversity: {",
    //   long: "CentralEuropeanUniversity: {SubjectOfStudy: Mast...",
    //   selected: false,
    //   text: CEU,
    // },
    // {
    //   short: "UniversityOfArkansas",
    //   long: "UniversityOfArkansas: {SubjectOfStudy: Political Sci...",
    //   selected: false,
    //   text: UofA,
    // },
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
              style={{ fontSize: "1.7rem" }}
            >
              {h.text}
            </Panel>
          ))}
        </Collapse>

        {/* <Collapse
          bordered={false}
          className="site-collapse-custom-collapse"
          onChange={changeHeaderMain}
        >
          <Panel
            header={tldrState}
            key="1"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            {TLDRText}
          </Panel>
          <Panel
            header={skillsState}
            key="2"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
            ariaExpanded="true"
          >
            {SkillsText}
          </Panel>
          <Panel
            header={xpState}
            key="3"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            {XPText}
          </Panel>
          <Panel
            header={eduState}
            key="4"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            <Collapse
              bordered={false}
              style={{ border: "none" }}
              onChange={changeHeaderMinor}
            >
              <Panel
                header={lambState}
                style={{
                  paddingLeft: 24,
                  borderBottom: "none",
                  fontSize: "1.3rem",
                }}
                key="5"
                className="site-collapse-custom-panel"
              >
                {LambdaSchool}
              </Panel>
              <Panel
                header={ceuState}
                style={{
                  paddingLeft: 24,
                  borderBottom: "none",
                  fontSize: "1.3rem",
                }}
                key="6"
                className="site-collapse-custom-panel"
              >
                {CEU}
              </Panel>
              <Panel
                header={uofaState}
                style={{
                  paddingLeft: 24,
                  borderBottom: "none",
                  fontSize: "1.3rem",
                }}
                key="7"
                className="site-collapse-custom-panel"
              >
                {UofA}
              </Panel>
              <Panel
                header="},"
                showArrow={false}
                style={{
                  paddingLeft: 24,
                  borderBottom: "none",
                  fontSize: "1.7rem",
                }}
                key="8"
                className="site-collapse-custom-panel"
              ></Panel>
            </Collapse>
          </Panel>
          <Panel
            header={hobbiesState}
            key="9"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            {HobbiesText} */}
        {/* </Panel>
        </Collapse> */}
      </AboutContent>
    </AboutCont>
  );
};

export default About;
