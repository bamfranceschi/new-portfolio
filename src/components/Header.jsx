import React from "react";
import styled from "styled-components";
import PDF from "./Anna_Franceschi_Resume.pdf";

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
  justify-content: space-between;
  width: 60%;
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
          <h4 style={{ color: "midnightblue" }}>Full-Stack Developer</h4>
          <h4 style={{ color: "midnightblue" }}>Austin, Tx</h4>
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
      <HeaderImg
        src="https://images.unsplash.com/photo-1560182704-284aa5d1b787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
        alt="Austin Motel sign"
      ></HeaderImg>
    </HeaderCont>
  );
};

export default Header;
