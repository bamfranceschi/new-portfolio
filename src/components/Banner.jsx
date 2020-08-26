import React from "react";
import styled from "styled-components";
import { DiJavascript1 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
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
  margin-left: 3rem;
  margin-right: 10rem;
`;

const Banner = () => {
  return (
    <BannerCont>
      <DiJavascript1 style={{ color: "midnightblue" }} />
      {/* <i
        class="devicon-typescript-plain"
        style={{ fontSize: "5rem", alignSelf: "center", color: "midnightblue" }}
      ></i> */}
      <DiPython style={{ color: "midnightblue" }} />
      <DiNodejsSmall style={{ color: "midnightblue" }} />
      <DiPostgresql style={{ color: "midnightblue" }} />
      <DiReact style={{ color: "midnightblue" }} />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6.5rem"
        height="6.5rem"
        data-name="Layer 1"
        viewBox="0 0 48 48"
        fill="midnightblue"
      >
        <path d="M29.47,29.34a2,2,0,0,0-.22-4h-.07a2,2,0,0,0-1.95,2.09,2.1,2.1,0,0,0,.58,1.34,12.93,12.93,0,0,1-5.92,5.66A9.76,9.76,0,0,1,16,35.51a5,5,0,0,1-3.68-2.13A5.31,5.31,0,0,1,12,27.79,8.58,8.58,0,0,1,14.5,24.9,18.21,18.21,0,0,1,14,23.06C8.8,26.85,9.34,32,10.92,34.39a7.5,7.5,0,0,0,6.28,2.92,8.93,8.93,0,0,0,2.17-.25A13.85,13.85,0,0,0,29.47,29.34Zm6.35-4.47a14.62,14.62,0,0,0-11.4-5h-.58a2,2,0,0,0-1.77-1.09H22a2,2,0,0,0,.07,4.05h.07a2,2,0,0,0,1.77-1.23h.65A13.79,13.79,0,0,1,32.25,24a9.7,9.7,0,0,1,3.82,4.62A5,5,0,0,1,36,32.84a5.3,5.3,0,0,1-4.94,3A9.3,9.3,0,0,1,27.52,35c-.4.36-1.12.94-1.62,1.3a11.16,11.16,0,0,0,4.65,1.12,7.82,7.82,0,0,0,7-3.83C38.6,31.54,38.52,27.93,35.82,24.87ZM17.49,30a2,2,0,0,0,2,1.95h.07a2,2,0,0,0-.07-4h-.07a.55.55,0,0,0-.25,0,13.22,13.22,0,0,1-1.88-8,9.7,9.7,0,0,1,2.13-5.6,6.31,6.31,0,0,1,4.44-2c3.82-.07,5.44,4.69,5.55,6.61.47.1,1.27.36,1.81.54-.44-5.85-4-8.88-7.51-8.88a8.17,8.17,0,0,0-7.43,5.81,14.77,14.77,0,0,0,1.44,12.56A1.59,1.59,0,0,0,17.49,30Z" />
      </svg>
      <DiHtml5 style={{ color: "midnightblue" }} />
      <DiSass style={{ color: "midnightblue" }} />
      {/* <DiCss3Full style={{ color: "midnightblue" }} /> */}
    </BannerCont>
  );
};

export default Banner;
