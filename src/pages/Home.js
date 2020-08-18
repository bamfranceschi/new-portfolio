import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProjectCont from "../components/ProjectCont";
import AboutCont from "../components/AboutCont";
import styled from "styled-components";

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
