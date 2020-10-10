import React from "react";
import styled from "styled-components";

interface Iprops {
  children: string;
}

const Header = styled.span`
  font-size: ${({ theme }) => theme.fonts.extra};
  color: ${({ theme }) => theme.colors.header};
`;

const BigHeader = ({ children }: Iprops) => {
  return <Header>{children}</Header>;
};

export default BigHeader;
