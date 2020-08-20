import React from "react";
import styled from "styled-components";
import PDF from "./Anna_Franceschi_Resume.pdf";
import AnnaPic from "../images/Anna_Franceschi_square.jpeg";

const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const HeaderImg = styled.img`
  border-radius: 20%;
  width: 30rem;
  height: 30rem;
  display: flex;
  align-self: center;
  margin-right: 10rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;
`;

const HeaderName = styled.h1`
  font-size: 5rem;
  color: midnightblue;
`;

const HeaderSub = styled.div`
  font-size: 3rem;
  color: midnightblue;
`;

const AInfoTag = styled.a`
  font-size: 1.8rem;
  color: midnightblue;
`;

const EmailATag = styled.a`
  font-size: 1.8rem;
  width: 61%;
  color: midnightblue;
`;

const NumberATag = styled.a`
  font-size: 1.8rem;
  width: 38%;
  color: midnightblue;
`;

const InfoBar = styled.h6`
  font-size: 1.8rem;
  color: midnightblue;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const ContactInfoSub = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 45px;
`;

const Header = () => {
  return (
    <HeaderCont>
      <HeaderInfo>
        <HeaderName>Anna Franceschi</HeaderName>
        <HeaderSub>
          <h4 style={{ color: "dimgray" }}>Full Stack Web Developer</h4>
          <h5 style={{ color: "dimgray" }}>Austin, Tx</h5>
          <ContactInfo>
            <EmailATag href="mailto:anna.franceschi@gmail.com">
              anna.franceschi@gmail.com
            </EmailATag>
            <NumberATag href="tel:9794502570">(979) 450-2570</NumberATag>
            <ContactInfoSub>
              <AInfoTag href="https://github.com/bamfranceschi" target="_">
                Github
              </AInfoTag>
              <InfoBar>|</InfoBar>
              <AInfoTag
                href="https://www.linkedin.com/in/anna-franceschi-a50a8584/"
                target="_"
              >
                LinkedIn
              </AInfoTag>
              <InfoBar>|</InfoBar>
              <AInfoTag href={PDF} download="Anna Franceschi Resume">
                Resume
              </AInfoTag>
            </ContactInfoSub>
          </ContactInfo>
        </HeaderSub>
      </HeaderInfo>
      <HeaderImg src={AnnaPic} alt="Anna Franceschi Profile"></HeaderImg>
    </HeaderCont>
  );
};

export default Header;
