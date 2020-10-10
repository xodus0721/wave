import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.img`
  width: 50px;
  height: 50px;
`;

const Logo = () => {
  return <LogoWrapper src="images/wave.svg" alt="왜 안돼!" />;
};

export default Logo;
