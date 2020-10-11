import React from "react";
import styled from "styled-components";

interface IProps {
  children: string;
}

const DescriptionText = styled.div`
  font-size: ${({ theme }) => theme.fonts.big};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const BigSizeHeader = ({ children }: IProps) => {
  return <DescriptionText>{children}</DescriptionText>;
};

export default BigSizeHeader;
