import React from "react";
import styled from "styled-components";
import media from "../media";

const Action = styled.li`
  font-size: 1.3rem;
  width: 87%;

  ${media.between("smMobile", "lgMobile")`
  font-size: 1.5rem;
  `}
`;

const ProjAction = (props) => {
  return <Action>{props.a}</Action>;
};

export default ProjAction;
