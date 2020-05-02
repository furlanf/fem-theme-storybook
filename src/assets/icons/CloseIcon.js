import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      id="x"
      d="M7.5,7.5,0,15,7.5,7.5,0,0,7.5,7.5,15,0,7.5,7.5,15,15Z"
      transform="translate(0.707 0.707)"
      fill="none"
      stroke="#cccccc"
      stroke-linecap="round"
      stroke-width="2"
    />
  </CloseIconWrapper>
);
