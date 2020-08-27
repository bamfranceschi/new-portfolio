import React from "react";
import styled from "styled-components";
import media from "../media";

const Action = styled.li`
  font-size: 1.3rem;
  width: 87%;
  color: dimgrey;

  ${media.between("smMobile", "smScreen")`
  font-size: 1.5rem;
  `}

  ${media.between("tablet", "smScreen")`
  font-size: 1.5rem;
  width: 80%
  // border: 1px solid green;
  margin-left: 4rem;
  `}
`;

const ProjAction = (props) => {
  return <Action>{props.a}</Action>;
};

export default ProjAction;
