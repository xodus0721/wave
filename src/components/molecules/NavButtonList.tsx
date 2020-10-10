import React from "react";
import styled from "styled-components";
import NavTextButton from "../atoms/NavTextButton";

interface Iprops {
  buttonData: { content: string; isBold: boolean; path: string }[];
  mouseHover: (index: number) => void;
  order: number;
}

const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButtonList = ({ buttonData, mouseHover, order }: Iprops) => {
  return (
    <ButtonList>
      {buttonData.map((data: any, i: number) => {
        return (
          <NavTextButton
            index={i}
            content={data.content}
            isBold={data.isBold}
            path={data.path}
            mouseHover={mouseHover}
            order={order}
            key={i}
          />
        );
      })}
    </ButtonList>
  );
};

export default NavButtonList;
