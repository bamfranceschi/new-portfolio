import React from "react";
import styled from "styled-components";

const OuterArray = styled.p`
    padding-left: 24px
    font-size: 1.3rem
    color: midnightblue
`;

const Curlies = styled.p`
    padding-left: 48px
    font-size: 1.3rem
    color: midnightblue
`;

const ObjectLines = styled.p`
    padding-left: 72px
    font-size: 1.3rem
    color: midnightblue
`;

const Education = (
  <div>
    <OuterArray>[</OuterArray>
    <Curlies>{"{"}</Curlies>
    <ObjectLines>name: "LambdaSchool",</ObjectLines>
    <ObjectLines>
      subjectOfStudy: "Full Stack Web Development & Computer Science",
    </ObjectLines>
    <ObjectLines>endDate: "2020-07-31",</ObjectLines>
    <Curlies>{"},"}</Curlies>
    <Curlies>{"{"}</Curlies>
    <ObjectLines>name: "CentralEuropeanUniversity",</ObjectLines>
    <ObjectLines>
      subjectOfStudy: "Masters in Public Policy: Rural Development",
    </ObjectLines>
    <ObjectLines>endDate: "2014-07-15",</ObjectLines>
    <Curlies>{"},"}</Curlies>
    <Curlies>{"{"}</Curlies>
    <ObjectLines>name: "UniversityOfArkansas",</ObjectLines>{" "}
    <ObjectLines>subjectOfStudy: "Bachelors in Political Science",</ObjectLines>
    <ObjectLines>endDate: "2011-05-12",</ObjectLines>
    <Curlies>{"},"}</Curlies>
    <OuterArray>]</OuterArray>
  </div>
);

export default Education;
