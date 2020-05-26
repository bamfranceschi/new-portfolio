import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;
  justify-content: center;
`;

const HeaderName = styled.h1`
  font-size: 5rem;
`;

const HeaderSub = styled.div`
  font-size: 3rem;
`;

const HeaderImg = styled.img`
  width: 50%;
`;

const Header = () => {
  return (
    <HeaderCont>
      <HeaderInfo>
        <HeaderName>Anna Franceschi</HeaderName>
        <HeaderSub>
          <h4>Full-Stack Developer</h4>
          <h4>Austin, Tx</h4>
        </HeaderSub>
        <Nav />
      </HeaderInfo>
      <HeaderImg
        src="https://images.unsplash.com/photo-1560182704-284aa5d1b787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
        alt="Austin Motel sign"
      ></HeaderImg>
    </HeaderCont>
  );
};

export default Header;
