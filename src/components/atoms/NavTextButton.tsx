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
  font-size: ${(props: IStyledProps) => (props.isBold ? "1.5em" : "1em")};
  font-weight: ${(props) => (props.isBold ? "bold" : "")};
  padding: 0 0.625em;
  margin: 0 0.625em;
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
