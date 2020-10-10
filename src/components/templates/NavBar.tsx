import React from "react";
import styled from "styled-components";
import MiniNavBar from "../organisms/MiniNavBar";
import Logo from "../atoms/Logo";

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const firstTItles = [
  {
    content: "홈페이지 소개",
    isBold: true,
  },
  {
    content: "파동의 성질",
    isBold: false,
  },
  {
    content: "전반사",
    isBold: false,
  },
  {
    content: "전자기파",
    isBold: false,
  },
  {
    content: "파동의 간섭",
    isBold: false,
  },
  {
    content: "빛의 이중성",
    isBold: false,
  },
  {
    content: "물질의 이중성",
    isBold: false,
  },
];

const secondTItles = [
  {
    content: "단원 정리",
    isBold: true,
  },
  {
    content: "전반사",
    isBold: false,
  },
];

const NavBar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <Logo />
        <MiniNavBar datas={firstTItles} order={1}></MiniNavBar>
        <MiniNavBar datas={secondTItles} order={2}></MiniNavBar>
      </NavContainer>
    </NavWrapper>
  );
};

export default NavBar;
