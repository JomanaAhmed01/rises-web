import React from "react";
import styled from "styled-components";
import { Asterisk } from "@styled-icons/fa-solid/Asterisk";

function OurServices() {
  return (
    <Wrapper>
      <MainWrapper>
        <Image src="/imgs/meeting.jpg" />
        
        <TextWrapper>
          <Header>Our Services</Header>

          <Text>
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story.
          </Text>

          <Button>
            <ButtonText>Book Now</ButtonText>
          </Button>
        </TextWrapper>

        <BoxesWrapper>
          <BoxWrapper>
            <AsteriskIcon />

            <BoxHeader>Strategies for Success</BoxHeader>

            <BoxText>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </BoxText>
          </BoxWrapper>

          <BoxWrapper>
            <AsteriskIcon />

            <BoxHeader>Operational Planning</BoxHeader>

            <BoxText>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </BoxText>
          </BoxWrapper>

          <BoxWrapper>
            <AsteriskIcon />

            <BoxHeader>Data Advising</BoxHeader>

            <BoxText>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </BoxText>
          </BoxWrapper>

          <BoxWrapper>
            <AsteriskIcon />

            <BoxHeader>Project Management</BoxHeader>

            <BoxText>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </BoxText>
          </BoxWrapper>
        </BoxesWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #0732ef;
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 708px;
  height: 465px;
  margin-top: -200px;
  display: block;
  margin-left: auto;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    width: 608px;
    height: 400px;
  }

  @media screen and (max-width: 830px) {
    width: 80%;
    height: 60%;
    margin-top: -150px;
  }
`;

export const MainWrapper = styled.div`
  padding-top: 30px;
`;

export const TextWrapper = styled.div`
  margin-top: -50px;
  margin-left: 200px;

  @media screen and (max-width: 1090px) {
    margin-left: 100px;
  }

  @media screen and (max-width: 830px) {
    margin-left: 70px;
  }

  @media screen and (max-width: 550px) {
    margin-left: 30px;
  }
`;

export const Header = styled.p`
  color: #ffffff;
  font-size: 80px;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 20px;
  width: 560px;
  margin-top: -40px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 95%;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const Button = styled.div`
  border: 1px solid #ffffff;
  color: #ffffff;
  width: 280px;
  height: 52px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin-top: 60px;
  cursor: pointer;

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
  flex-wrap: wrap;
  width: 900px;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 968px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    width: auto;
  }
`;

export const BoxWrapper = styled.div`
  border: 1px solid #ffffff;
  width: 400px;
  height: 276px;
  border-radius: 20px;
  padding-left: 30px;
  margin-bottom: 20px;

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

export const AsteriskIcon = styled(Asterisk)`
  color: #ffff99;
  width: 32px;
  height: 32px;
  padding-top: 20px;
`;

export const BoxHeader = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const BoxText = styled.p`
  color: #ffffff;
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

export default OurServices;
