import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProjectCont from "../components/ProjectCont";
import AboutCont from "../components/About/AboutCont";
import styled from "styled-components";
import media from "../media";

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;

  ${media.between("smMobile", "lgMobile")`
  // border: 1px solid green;
  width: 34rem;
  align-items: center;
  margin-top: 5rem;
  
  `}
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  ${media.between("smMobile", "lgMobile")`
  flex-direction: column-reverse;
  width: 34rem;
  `}
`;

function Home() {
  return (
    <ParentDiv>
      <Header />
      <Banner />
      <ContentDiv>
        <AboutCont />
        <ProjectCont />
      </ContentDiv>
    </ParentDiv>
  );
}

export default Home;
