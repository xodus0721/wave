import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.img`
  width: 3em;
  height: 3em;
`;

const Logo = () => {
  return <LogoWrapper src="images/wave.svg" alt="왜 안돼!" />;
};

export default Logo;
