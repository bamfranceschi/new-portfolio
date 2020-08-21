import React, { useState } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import "../../index.css";
import TLDRText from "./TLDR";
import XPText from "./XP";
import SkillsText from "./Skills";
import HobbiesText from "./Hobbies";
import LambdaSchool from "./Education/LambdaSchool";
import CEU from "./Education/CEU";
import UofA from "./Education/UofA";
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

const About = () => {
  const [tldrState, setTldrState] = useState(
    "TLDR: Lorem impsum blah blah blah blah blah blah..."
  );

  const [skillsState, setSkillsState] = useState(
    "Skills: JavaScript Python TypeScript..."
  );

  const [xpState, setXPState] = useState(
    "Experience: lorem ipsum blah blah blah blah blah blah blah..."
  );
  const [eduState, setEduState] = useState(
    "Education: LambdaSchool: {...}, {CentralEuropeanUniv..."
  );

  const [lambState, setLambState] = useState(
    "LambdaSchool: {SubjectOfStudy: Full Stack Web Developmen.."
  );

  const [ceuState, setCeuState] = useState(
    "CentralEuropeanUniversity: {SubjectOfStudy: Mast..."
  );

  const [uofaState, setUofaState] = useState(
    "UniversityOfArkansas: {SubjectOfStudy: Political Sci..."
  );

  const [hobbiesState, setHobbiesState] = useState(
    "Hobbies: Krav Maga, Carpentry, Texti..."
  );

  const changeHeaderMain = (key) => {
    if (key.includes("1")) {
      setTldrState("TLDR:");
    } else {
      setTldrState("TLDR: Lorem impsum blah blah blah blah blah blah...");
    }
    if (key.includes("2")) {
      setSkillsState("Skills:");
    } else {
      setSkillsState("Skills: JavaScript Python TypeScript...");
    }
    if (key.includes("3")) {
      setXPState("Experience:");
    } else {
      setXPState(
        "Experience: lorem ipsum blah blah blah blah blah blah blah..."
      );
    }
    if (key.includes("4")) {
      setEduState("Education: {");
    } else {
      setEduState("Education: LambdaSchool: {...}, {CentralEuropeanUniv...");
    }

    if (key.includes("9")) {
      setHobbiesState("Hobbies: [");
    } else {
      setHobbiesState("Hobbies: Krav Maga, Carpentry, Texti...");
    }
  };

  const changeHeaderMinor = (key) => {
    if (key.includes("5")) {
      setLambState("LambdaSchool: {");
    } else {
      setLambState(
        "LambdaSchool: {SubjectOfStudy: Full Stack Web Developmen.."
      );
    }

    if (key.includes("6")) {
      setCeuState("CentralEuropeanUniversity: {");
    } else {
      setCeuState("CentralEuropeanUniversity: {SubjectOfStudy: Mast...");
    }

    if (key.includes("7")) {
      setUofaState("UniversityOfArkansas: {");
    } else {
      setUofaState("UniversityOfArkansas: {SubjectOfStudy: Political Sci...");
    }
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
      {/* <AboutCollapse /> */}
      <AboutContent>
        <Collapse
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
            {HobbiesText}
          </Panel>
        </Collapse>
      </AboutContent>
    </AboutCont>
  );
};

export default About;
