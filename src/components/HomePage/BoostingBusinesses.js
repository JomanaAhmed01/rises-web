import React from "react";
import styled from "styled-components";
import { Flutter } from "@styled-icons/boxicons-logos/Flutter";

function BoostingBusinesses() {
  return (
    <Wrapper>
      <MainWrapper>
        <Header>Boosting Businesses</Header>

        <ElementsWrapper>
          <ElementWrapper>
            <Icon />

            <ElementText>$70M+</ElementText>

            <ElementTitle>Client Review</ElementTitle>
          </ElementWrapper>

          <ElementWrapper>
            <Icon />

            <ElementText>+72%</ElementText>

            <ElementTitle>YoY Growth</ElementTitle>
          </ElementWrapper>

          <ElementWrapper>
            <Icon />

            <ElementText>50</ElementText>

            <ElementTitle>Global Business Partners</ElementTitle>
          </ElementWrapper>

          <ElementWrapper>
            <Icon />

            <ElementText>12</ElementText>

            <ElementTitle>Years of Experience</ElementTitle>
          </ElementWrapper>
        </ElementsWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #0732ef;
  padding-bottom: 100px;
  overflow: hidden;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.p`
  color: #ffffff;
  font-size: 80px;
  font-weight: bold;

  @media screen and (max-width: 980px) {
    font-size: 60px;
  }

  @media screen and (max-width: 675px) {
    font-size: 40px;
    width: 90%;
    text-align: center;
  }
`;

export const ElementsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 900px;
  padding-top: 100px;

  @media screen and (max-width: 980px) {
    padding-top: 70px;
    flex-wrap: wrap;
    max-width: 90%;
  }

  @media screen and (max-width: 520px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const ElementWrapper = styled.div`
  /* border: 3px solid purple; */
  /* height: 250px; */
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 980px) {
    margin-right: 20px;
  }
`;

export const Icon = styled(Flutter)`
  color: #d9fb99;
  width: 155px;
  height: 142px;
  margin-bottom: -50px;

  @media screen and (max-width: 980px) {
    width: 135px;
    height: 122px;
  }
`;

export const ElementText = styled.p`
  color: #ffffff;
  font-size: 64px;

  @media screen and (max-width: 980px) {
    font-size: 54px;
  }
`;

export const ElementTitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-top: -50px;
  
  @media screen and (max-width: 980px) {
    font-size: 18px;
  }
`;

export default BoostingBusinesses;
