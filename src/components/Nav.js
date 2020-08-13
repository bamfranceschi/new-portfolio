import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PrettyNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

// const PrettyLink = styled.link`
//   margin: 2rem;
// `;

const Nav = () => {
  return (
    <PrettyNav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </PrettyNav>
  );
};

export default Nav;
