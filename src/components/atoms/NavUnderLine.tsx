import React from "react";
import styled from "styled-components";

interface Iprops {
  width: number;
  left: number;
}

const UnderLine = styled.div`
  padding: 0;
  cursor: none;
  width: ${(props: Iprops) => props.width}px;
  height: 2px;
  background: black;
  transition: all 600ms ease;
  position: relative;
  bottom: 0.8em;
  left: ${(props) => props.left}px;
`;

const NavUnderLine = ({ width, left }: Iprops) => {
  return <UnderLine width={width} left={left} />;
};

export default NavUnderLine;
