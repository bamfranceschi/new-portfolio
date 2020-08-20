import React from "react";
import TLDR from "../About/TLDR";
import XP from "../About/XP";
import Skills from "../About/Skills";
import Hobbies from "../About/Hobbies";
import LambdaSchool from "./Education/LambdaSchool";
import CEU from "./Education/CEU";
import UofA from "./Education/UofA";
import { AiFillCaretRight } from "react-icons/ai";

const AboutCollapse = () => {
  //I think I'll need a toggle state
  // need an onclick handler to toggle className for each relevant element
  console.log(window);

  //preview before toggle open:
  //tldr gets "lorem ipsum blah blah blah..."
  //skils gets ["JavaScript", "ReactJS", "NodeJS"...
  //experience gets "lorem ipsum blah blah blah..."
  // education gets an {LambdaSchool: {...}, CentralEurop...
  //hobbies gets ["Krav Maga", "Carpentry", "Textile art"...

  const handleClick = (e) => {};

  return (
    <>
      <div>
        <div onClick={handleClick()}>
          <span>
            <AiFillCaretRight />
          </span>
          <span>TLDR: "lorem ipsum blah blah blah..."</span>
        </div>
        <div>{TLDR}</div>
      </div>

      {/* <div>
        <div>
          <span>
            <AiFillCaretRight />
          </span>
          <span>Skills</span>
        </div>
        <div>{Skills}</div>
      </div>
      <div>
        <div>
          <span>
            <AiFillCaretRight />
          </span>
          <span>Experience</span>
        </div>
        <div>{XP}</div>
      </div>
      <div>
        <div>
          <span>
            <AiFillCaretRight />
          </span>
          <span>Education</span>
        </div>
        <div style={{ paddingLeft: "25px" }}>
          <div>
            <span>
              <AiFillCaretRight />
              LambdaSchool
            </span>
          </div>

          {LambdaSchool}
        </div>
        <div style={{ paddingLeft: "25px" }}>
          <div>
            <span>
              <AiFillCaretRight />
              CentralEuropeanUniversity
            </span>
          </div>
          {CEU}
        </div>
        <div style={{ paddingLeft: "25px" }}>
          <div>
            <span>
              <AiFillCaretRight />
              UniversityOfArkansas
            </span>
          </div>
          {UofA}
        </div>
      </div>
      <div>
        <div>
          <span>
            <AiFillCaretRight />
          </span>
          <span>Hobbies</span>
        </div> */}

      {/* <div>{Hobbies}</div> */}
      {/* </div> */}
    </>
  );
};

export default AboutCollapse;
