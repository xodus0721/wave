import React from "react";
import styled from "styled-components";

interface IProps {
  path: string;
}

const Image = styled.img`
  width: 40em;
`;

const ImageBox = ({ path }: IProps) => {
  return <Image src={path} />;
};

export default ImageBox;
