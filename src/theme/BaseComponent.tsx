import React from "react";
import styled from "styled-components";
import { StyleSheet } from "./StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponent {
  stylesheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  ${({ stylesheet }) => parseStyleSheet(stylesheet)}
`;

export const BaseComponent = (props) => {
  return <StyledBaseComponent {...props} />;
};

BaseComponent.defaultProps = {
  stylesheet: {},
};
