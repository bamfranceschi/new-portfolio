import React from "react";
import styled from "styled-components";
import PDF from "./Anna_Franceschi_Resume.pdf";
import AnnaPic from "../images/Anna_Franceschi_square.jpeg";
import media from "../media";

const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;

  ${media.between("smMobile", "lgMobile")`
    flex-direction: column-reverse
    justify-content: center;
    width: 100%;
    // border: 1px solid red;
  `}
`;

const HeaderImg = styled.img`
  border-radius: 15%;
  width: 30rem;
  height: 30rem;
  display: flex;
  align-self: center;
  margin-right: 10rem;

  ${media.between("smMobile", "lgMobile")`
    margin-right: 0rem;
    width: 20rem;
    height: 20rem;
  `}
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;

  ${media.between("smMobile", "lgMobile")`
  align-items: center;
  text-align: center;
  `}
`;

const HeaderName = styled.h1`
  font-size: 5rem;
  color: midnightblue;

  ${media.between("smMobile", "lgMobile")`
  font-size: 3.5rem;
  `}
`;

const HeaderSub = styled.div`
  font-size: 3rem;
  color: midnightblue;

  ${media.between("smMobile", "lgMobile")`
  font-size: 2.5rem;
  `}
`;

const AInfoTag = styled.a`
  font-size: 1.8rem;
  color: midnightblue;
`;

const EmailATag = styled.a`
  font-size: 1.8rem;
  width: 61%;
  color: midnightblue;

  ${media.between("smMobile", "lgMobile")`
  width: 100%
  `}
`;

const NumberATag = styled.a`
  font-size: 1.8rem;
  width: 38%;
  color: midnightblue;

  ${media.between("smMobile", "lgMobile")`
  width: 100%
  `}
`;

const InfoBar = styled.h6`
  font-size: 1.8rem;
  color: midnightblue;

  ${media.between("smMobile", "lgMobile")`
  display: flex;
  align-self: flex-start;
  `}
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

  ${media.between("smMobile", "lgMobile")`
  width: 100%
  `}
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
