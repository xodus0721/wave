import React from "react";
import styled from "styled-components";

interface IProps {
  children: string;
}

const DescriptionText = styled.div`
  font-size: ${({ theme }) => theme.fonts.semiBig};
  color: ${({ theme }) => theme.colors.gray};
`;

const Description = ({ children }: IProps) => {
  return <DescriptionText>{children}</DescriptionText>;
};

export default Description;
