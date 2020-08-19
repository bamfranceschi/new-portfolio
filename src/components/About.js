import React from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import "../index.css";

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
`;

const AboutContent = styled.div`
  margin-top: 4rem;
  margin-left: 1.5rem;
`;

const { Panel } = Collapse;

const TLDRText = (
  <p style={{ paddingLeft: 24, fontSize: "1.3rem", color: "midnightblue" }}>
    This will be the TLDR headline
  </p>
);
const XPText = (
  <p style={{ paddingLeft: 24, fontSize: "1.3rem", color: "midnightblue" }}>
    "Internship with Connect Our Kids, Team Lead experience, all projects. Chief
    Development Officer for Austin-based int'l nonprofit, co-founder & CEO of
    startup, Production Manager for Digital Marketing firm."
  </p>
);
const SkillsText = (
  <p style={{ paddingLeft: 24, fontSize: "1.3rem", color: "midnightblue" }}>
    "JavaScript",
    <br /> "Python",
    <br /> "TypeScript",
    <br />
    "ReactJS",
    <br />
    "NodeJS",
    <br />
    "PostgreSQL",
    <br />
    "Jest",
    <br />
    "Express",
    <br />
    "Knex",
    <br />
    "Redux",
    <br />
    "ReactNative",
    <br />
    "SQL",
    <br />
    "SQLite3",
    <br />
    "HTML",
    <br />
    "CSS",
    <br />
    "SASS/SCSS",
    <br />
    "Styled Components",
    <br />
    <p style={{ fontSize: "1.7rem" }}>],</p>
  </p>
);

const LambdaSchool = (
  <p style={{ paddingLeft: 24, fontSize: "1.3rem", color: "midnightblue" }}>
    SubjectOfStudy: "Full Stack Web Development & Computer Science",
    <br />
    EndDate: "2020-07-31"
    <br />
    },
  </p>
);

const CEU = (
  <p style={{ paddingLeft: 24, fontSize: "1.3rem", color: "midnightblue" }}>
    SubjectOfStudy: "Masters in Public Policy: Rural Development",
    <br />
    EndDate: "2014-07-15"
    <br />
    },
  </p>
);

const UofA = (
  <p style={{ paddingLeft: 24, fontSize: "1.3rem", color: "midnightblue" }}>
    SubjectOfStudy: "Bachelors in Political Science",
    <br />
    EndDate: "2011-05-12"
    <br />
    },
  </p>
);

const HobbiesText = (
  <p style={{ paddingLeft: 24, fontSize: "1.3rem", color: "midnightblue" }}>
    "Krav Maga", <br />
    "Carpentry",
    <br />
    "Textile art",
    <br />
    "All things food",
    <br />
    "Backpacking"
    <br />
    <p style={{ fontSize: "1.7rem" }}>],</p>
  </p>
);

const About = () => {
  return (
    <AboutCont>
      <AboutTitle>About</AboutTitle>
      <AboutHeader>
        <h3 style={{ color: "dimgrey" }}>Power Statement will go here!</h3>
      </AboutHeader>
      <AboutContent>
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
      </AboutContent>
    </AboutCont>
  );
};

export default About;
