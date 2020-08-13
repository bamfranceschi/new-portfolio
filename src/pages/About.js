import React from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";

const { Panel } = Collapse;

const TLDRText = (
  <p style={{ paddingLeft: 24 }}>This will be the TLDR headline</p>
);
const XPText = (
  <p style={{ paddingLeft: 24 }}>
    "Internship with Connect Our Kids, Team Lead experience, all projects. Chief
    Development Officer for Austin-based int'l nonprofit, co-founder & CEO of
    startup, Production Manager for Digital Marketing firm."
  </p>
);
const SkillsText = (
  <p style={{ paddingLeft: 24 }}>
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
  </p>
);

const LambdaSchool = (
  <p style={{ paddingLeft: 24 }}>
    SubjectOfStudy: "Full Stack Web Development & Computer Science",
    <br />
    EndDate: "2020-07-31"
  </p>
);

const CEU = (
  <p style={{ paddingLeft: 24 }}>
    SubjectOfStudy: "Masters in Public Policy: Rural Development",
    <br />
    EndDate: "2014-07-15"
  </p>
);

const UofA = (
  <p style={{ paddingLeft: 24 }}>
    SubjectOfStudy: "Bachelors in Political Science",
    <br />
    EndDate: "2011-05-12"
  </p>
);

const HobbiesText = (
  <p style={{ paddingLeft: 24 }}>
    "Krav Maga", <br />
    "Carpentry",
    <br />
    "Textile art",
    <br />
    "All things food",
    <br />
    "Backpacking"
  </p>
);

const About = () => {
  return (
    <>
      <Collapse bordered={false}>
        <Panel header="TLDR:" key="1">
          {TLDRText}
        </Panel>
        <Panel header="Experience:" key="2">
          {XPText}
        </Panel>
        <Panel header="Skills: [" key="3">
          {SkillsText}
        </Panel>
        <Panel
          header="],"
          showArrow={false}
          style={{ paddingLeft: 24 }}
          key="4"
        ></Panel>
        <Panel header="Education: {" key="5">
          <Collapse>
            <Panel
              header="LambdaSchool: {"
              style={{ paddingLeft: 24 }}
              defaultActiveKey="5"
            >
              {LambdaSchool}
            </Panel>
            <Panel
              header="},"
              showArrow={false}
              style={{ paddingLeft: 48 }}
              defaultActiveKey="5"
            ></Panel>
          </Collapse>
          <Collapse>
            <Panel
              header="CentralEuropeanUniversity: {"
              style={{ paddingLeft: 24 }}
              defaultActiveKey="5"
            >
              {CEU}
            </Panel>
            <Panel
              header="},"
              showArrow={false}
              style={{ paddingLeft: 48 }}
              defaultActiveKey="5"
            ></Panel>
          </Collapse>
          <Collapse>
            <Panel
              header="UniversityOfArkansas: {"
              style={{ paddingLeft: 24 }}
              defaultActiveKey="5"
            >
              {UofA}
            </Panel>
            <Panel
              header="},"
              showArrow={false}
              style={{ paddingLeft: 48 }}
              defaultActiveKey="5"
            ></Panel>
          </Collapse>
        </Panel>
        <Panel
          header="},"
          showArrow={false}
          style={{ paddingLeft: 24 }}
          key="6"
        ></Panel>
        <Panel header="Hobbies: [" key="7">
          {HobbiesText}
        </Panel>
        <Panel
          header="],"
          showArrow={false}
          style={{ paddingLeft: 24 }}
          key="8"
        ></Panel>
      </Collapse>
    </>
  );
};

export default About;
