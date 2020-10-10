import React from "react";
import styled from "styled-components";

interface Iprops {
  index: number;
  content: string;
  isBold: boolean;
  mouseHover: (index: number) => void;
  order: number;
}

interface IStyledProps {
  isBold: boolean;
}

const NavText = styled.span`
  font-size: ${(props: IStyledProps) => (props.isBold ? "24px" : "20px")};
  font-weight: ${(props) => (props.isBold ? "bold" : "")};
  padding: 0px 20px;
  /* margin: 0 12px; */
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
  isBold,
  mouseHover,
  order,
}: Iprops) => {
  const handleMouseOver = () => {
    mouseHover(index);
  };

  return (
    <ClickArea className={`nav${order}-items`} onMouseOver={handleMouseOver}>
      <NavText isBold={isBold}>{content}</NavText>
    </ClickArea>
  );
};

export default NavTextButton;
