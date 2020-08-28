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
  margin-top: 2rem;

  ${media.between("smMobile", "smScreen")`
    display: flex;
    flex-direction: column-reverse
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
    width: 90vw;
  `}

  ${media.between("smScreen", "mdScreen")`
    margin-left: 0;
    margin-right: 0;
    width: 90vw;
  `}
`;

const HeaderImg = styled.img`
  border-radius: 15%;
  width: 25rem;
  height: 25rem;
  display: flex;
  align-self: center;
  margin-right: 4rem;

  ${media.between("smMobile", "smScreen")`
    margin-right: 0rem;
    width: 20rem;
    height: 20rem;
  `}

  ${media.between("smScreen", "mdScreen")`
    margin-right: 4rem;
    width: 23rem;
    height: 23rem;
  `}
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;

  ${media.between("smMobile", "smScreen")`
  align-items: center;
  text-align: center;
  `}

//   ${media.greaterThan("smScreen")`
//   margin-top: 5rem;
// `}
`;

const HeaderName = styled.h1`
  font-size: 3.8rem;
  color: midnightblue;

  ${media.between("smMobile", "smScreen")`
  font-size: 3.5rem;
  `}

  ${media.between("smScreen", "mdScreen")`
  font-size: 3.5rem;
`}
`;

const HeaderSub = styled.div`
  font-size: 3rem;
  color: midnightblue;

  ${media.between("smMobile", "smScreen")`
  font-size: 2.5rem;
  `}

  ${media.between("smScreen", "mdScreen")`
  font-size: 2.8rem;
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

  ${media.between("smMobile", "tablet")`
  width: 100%;
  `}

  ${media.between("tablet", "smScreen")`
  width: 100%;
`}
`;

const NumberATag = styled.a`
  font-size: 1.8rem;
  width: 70%;
  color: midnightblue;

  ${media.between("smMobile", "tablet")`
  width: 100%;
  `}

  ${media.between("tablet", "lgScreen")`
  width: 100%;
`}
`;

const InfoBar = styled.h6`
  font-size: 1.8rem;
  color: midnightblue;
  align-self: flex-start;

  ${media.between("smMobile", "tablet")`
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
  width: 80%;
  height: 45px;

  ${media.between("smMobile", "smScreen")`
  width: 100%
  `}

  ${media.between("smScreen", "lgScreen")`
  width: 80%
  `}
`;

const Header = () => {
  return (
    <HeaderCont>
      <HeaderInfo>
        <HeaderName>Anna Franceschi</HeaderName>
        <HeaderSub>
          <h5 style={{ color: "dimgray" }}>Full Stack Web Developer</h5>
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
