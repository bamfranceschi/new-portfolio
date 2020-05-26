import React from "react";
import styled from "styled-components";
import { DiJavascript1 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";

const BannerCont = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Banner = () => {
  return (
    <BannerCont>
      <DiJavascript1 />
      <i
        class="devicon-typescript-plain"
        style={{ fontSize: "5rem", alignSelf: "center" }}
      ></i>
      <DiPython />
      <DiNodejsSmall />
      <DiPostgresql />
      <DiDjango />
      <DiReact />
      <DiHtml5 />
      <DiSass />
      <DiCss3Full />
      {/* missing react native
       */}
    </BannerCont>
  );
};

export default Banner;
