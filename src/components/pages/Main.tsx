import React from "react";
import styled from "styled-components";
import ExtraSizeHeader from "../atoms/ExtraSizeHeader";
import BigSizeHeader from "../atoms/BigSizeHeader";
import ImageBox from "../atoms/ImageBox";

interface IStyledProps {
  location: string;
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const SectionWrpper = styled.div`
  height: 30em;
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${(props: IStyledProps) =>
    props.location === "left" ? "" : "row-reverse"};
  justify-content: space-around;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props: IStyledProps) =>
    props.location === "left" ? "" : "flex-end"};
`;

const Main = () => {
  return (
    <PageWrapper>
      <SectionWrpper>
        <Section location="left">
          <SectionHeader location="left">
            <ExtraSizeHeader>WAVE</ExtraSizeHeader>
            <BigSizeHeader>파동을 쉽게 이해하자</BigSizeHeader>
          </SectionHeader>
          <ImageBox path="images/sound-wave.jpg" />
        </Section>
      </SectionWrpper>
      <SectionWrpper>
        <Section location="right">
          <SectionHeader location="right">
            <ExtraSizeHeader>어려움</ExtraSizeHeader>
            <BigSizeHeader>사람들이 물리I을 포기하는</BigSizeHeader>
            <BigSizeHeader>가장 큰 이유입니다.</BigSizeHeader>
          </SectionHeader>
          <ImageBox path="images/flame.jpg" />
        </Section>
      </SectionWrpper>
    </PageWrapper>
  );
};

export default Main;
