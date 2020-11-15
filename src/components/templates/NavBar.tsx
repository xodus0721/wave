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
    path: "",
  },
  {
    content: "파동의 성질",
    isBold: false,
    path: "properties",
  },
  {
    content: "전반사",
    isBold: false,
    path: "totalreflection",
  },
  {
    content: "전자기파",
    isBold: false,
    path: "electromagneticradiation",
  },
  {
    content: "파동의 간섭",
    isBold: false,
    path: "interference",
  },
  {
    content: "빛의 이중성",
    isBold: false,
    path: "dualityoflight",
  },
  {
    content: "물질의 이중성",
    isBold: false,
    path: "Waveparticleduality",
  },
];

const secondTItles = [
  {
    content: "최종 정리",
    isBold: true,
    path: "finalsummary",
  },
  {
    content: "페이지 설정",
    isBold: false,
    path: "settings",
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
