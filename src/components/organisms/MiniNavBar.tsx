import React, { useState } from "react";
import styled from "styled-components";
import NavButtonList from "../molecules/NavButtonList";
import NavUnderLine from "../atoms/NavUnderLine";

interface Iprops {
  datas: { content: string; isBold: boolean; path: string }[];
  order: number;
}

const MiniNav = styled.div``;

const MiniNavBar = ({ datas, order }: Iprops) => {
  const [lineStatus, setLineStatus] = useState({
    width: 0,
    left: 0,
  });

  const { width, left } = lineStatus;

  const mouseHover = (index: number) => {
    const items = document.getElementsByClassName(`nav${order}-items`);
    const container = document.getElementsByClassName("container")[order - 1];
    setLineStatus({
      width: items[index].clientWidth - 20,
      left:
        items[index].getBoundingClientRect().left -
        container.getBoundingClientRect().left +
        10,
    });
  };

  return (
    <MiniNav className="container">
      <NavButtonList buttonData={datas} mouseHover={mouseHover} order={order} />
      <NavUnderLine width={width} left={left} />
    </MiniNav>
  );
};

export default MiniNavBar;
