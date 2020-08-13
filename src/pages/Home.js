import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProjectCont from "../components/ProjectCont";
import styled from "styled-components";

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

function Home() {
  return (
    <ParentDiv>
      <Header />
      <Banner />
      <ProjectCont />
    </ParentDiv>
  );
}

export default Home;
