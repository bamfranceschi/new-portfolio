import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProjectCont from "../components/ProjectCont";
import AboutCont from "../components/About/AboutCont";
import styled from "styled-components";

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
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
