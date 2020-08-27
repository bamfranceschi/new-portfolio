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
  max-width: 1400px;
  margin: 0 auto;

  ${media.between("smMobile", "tablet")`
  width: 34rem;
  align-items: center;
  margin-top: 5rem;
  `}

  ${media.between("tablet", "smScreen")`
  width: 64rem;
  `}

  ${media.between("smScreen", "mdScreen")`
  width: 64rem;
  `}
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  ${media.between("smMobile", "tablet")`
  flex-direction: column-reverse;
  width: 34rem;
  `}

  ${media.between("tablet", "smScreen")`
  flex-direction: column-reverse;
  width: 80rem;
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
