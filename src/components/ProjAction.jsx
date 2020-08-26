import React from "react";
import styled from "styled-components";

const Action = styled.li`
  font-size: 1.3rem;
  width: 87%;
`;

const ProjAction = (props) => {
  return <Action>{props.a}</Action>;
};

export default ProjAction;
