import React from "react";
// import { Collapse } from "antd";
// import "antd/dist/antd.css";
import styled from "styled-components";
import "../../index.css";
// import TLDRText from "./TLDR";
// import XPText from "./XP";
// import SkillsText from "./Skills";
// import HobbiesText from "./Hobbies";
// import LambdaSchool from "./Education/LambdaSchool";
// import CEU from "./Education/CEU";
// import UofA from "./Education/UofA";
import AboutCollapse from "./AboutCollapse";

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

// const AboutContent = styled.div`
//   margin-top: 4rem;
//   margin-left: 1.5rem;
// `;

// const { Panel } = Collapse;

const About = () => {
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
      <AboutCollapse />
      {/* <AboutContent>
        <Collapse bordered={false} className="site-collapse-custom-collapse">
          <Panel
            header="TLDR:"
            key="1"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            {TLDRText}
          </Panel>
          <Panel
            header="Skills: ["
            key="3"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            {SkillsText}
          </Panel>
          <Panel
            header="Experience:"
            key="2"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            {XPText}
          </Panel>
          <Panel
            header="Education: {"
            key="5"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            <Collapse bordered={false} style={{ border: "none" }}>
              <Panel
                header="LambdaSchool: {"
                style={{
                  paddingLeft: 24,
                  borderBottom: "none",
                  fontSize: "1.3rem",
                }}
                defaultActiveKey="5"
                className="site-collapse-custom-panel"
              >
                {LambdaSchool}
              </Panel>
            </Collapse>
            <Collapse bordered={false}>
              <Panel
                header="CentralEuropeanUniversity: {"
                style={{
                  paddingLeft: 24,
                  borderBottom: "none",
                  fontSize: "1.3rem",
                }}
                defaultActiveKey="5"
                className="site-collapse-custom-panel"
              >
                {CEU}
              </Panel>
            </Collapse>
            <Collapse bordered={false}>
              <Panel
                header="UniversityOfArkansas: {"
                style={{
                  paddingLeft: 24,
                  borderBottom: "none",
                  fontSize: "1.3rem",
                }}
                defaultActiveKey="5"
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
                key="6"
                className="site-collapse-custom-panel"
              ></Panel>
            </Collapse>
          </Panel>
          <Panel
            header="Hobbies: ["
            key="7"
            className="site-collapse-custom-panel"
            style={{ fontSize: "1.7rem" }}
          >
            {HobbiesText}
          </Panel>
        </Collapse>
      </AboutContent> */}
    </AboutCont>
  );
};

export default About;
