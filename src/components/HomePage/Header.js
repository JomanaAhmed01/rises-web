import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <MainWrapper>
        <TextWrapper>
          <Text>Business Consultants With a Growth Mindset</Text>

          <Button>
            <ButtonText>Get a Free Consultation</ButtonText>
          </Button>
        </TextWrapper>

        <BoxesWrapper>
          <BoxWrapper>
            <BoxHeader>Strategies for Success</BoxHeader>

            <BoxText>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </BoxText>

            <BoxButton>Read More</BoxButton>
          </BoxWrapper>

          <BoxWrapper>
            <BoxHeader>Optimize Your Business</BoxHeader>

            <BoxText>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </BoxText>

            <BoxButton>Book Now</BoxButton>
          </BoxWrapper>
        </BoxesWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffffe6;
`;

export const MainWrapper = styled.div``;

export const TextWrapper = styled.div``;

export const Text = styled.p`
  color: #0732ef;
  font-size: 80px;
  font-weight: bold;
  width: 900px;
  margin-left: 50px;
  /* border: 3px solid red; */

  @media screen and (max-width: 1024px) {
    font-size: 60px;
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    font-size: 32px;
    width: 75%;
  }
`;

export const Button = styled.div`
  border: 1px solid #0732ef;
  color: #0732ef;
  width: 280px;
  height: 52px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    width: 260px;
    height: 52px;
  }

  @media screen and (max-width: 500px) {
    width: 220px;
    height: 42px;
  }
`;

export const ButtonText = styled.p`
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const BoxesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 900px;
  margin-left: 40px;
  margin-top: 150px;

  @media screen and (max-width: 968px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    width: auto;
    border: 3px solid red;
  }
`;

export const BoxWrapper = styled.div`
  border: 1px solid #0732ef;
  width: 400px;
  height: 276px;
  border-radius: 20px;
  padding-left: 30px;

  @media screen and (max-width: 968px) {
    width: 300px;
    height: 276px;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 276px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

export const BoxHeader = styled.p`
  color: #0732ef;
  font-size: 24px;
  font-weight: bold;
`;

export const BoxText = styled.p`
  color: #0732ef;
  font-size: 20px;
  width: 357px;
  height: 103px;
  
  @media screen and (max-width: 968px) {
    width: 280px;
    height: 276px;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    width: 357px;
    height: 103px;
  }

  @media screen and (max-width: 500px) {
    width: 85%;
  }
`;

export const BoxButton = styled.p`
  color: #0732ef;
  font-size: 20px;
  font-weight: bold;
  margin-top: 50px;

  @media screen and (max-width: 968px) {
    margin-top: -150px;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export default Header;
