import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Iprops {
  index: number;
  content: string;
  isBold: boolean;
  mouseHover: (index: number) => void;
  order: number;
  path: string;
}

interface IStyledProps {
  isBold: boolean;
}

const NavText = styled.span`
  font-size: ${(props: IStyledProps) => (props.isBold ? "24px" : "20px")};
  font-weight: ${(props) => (props.isBold ? "bold" : "")};
  padding: 0px 10px;
  margin: 0 10px;
`;

const ClickArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const NavTextButton = ({
  index,
  content,
  path,
  isBold,
  mouseHover,
  order,
}: Iprops) => {
  const handleMouseOver = () => {
    mouseHover(index);
  };

  return (
    <ClickArea className={`nav${order}-items`} onMouseOver={handleMouseOver}>
      <Link to={`/${path}`}>
        <NavText isBold={isBold}>{content}</NavText>
      </Link>
    </ClickArea>
  );
};

export default NavTextButton;
