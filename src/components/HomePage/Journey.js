import React from "react";
import styled from "styled-components";

function Journey() {
  return (
    <Wrapper>
      <MainWrapper>
        <Header>The Journey to Rises</Header>

        <HeaderTwo>
          How we rose up to become leaders in the consulting industry.
        </HeaderTwo>

        <Text>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </Text>

        <Button>
          <ButtonText>About Us</ButtonText>
        </Button>

        {/* <Image src="/imgs/meeting.jpg" /> */}
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #bcc5f2;
  margin-top: 100px;
`;

export const MainWrapper = styled.div`
  padding-top: 30px;
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
  color: #0732ef;
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

export const HeaderTwo = styled.p`
  color: #0732ef;
  font-size: 24px;
  font-weight: bold;

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

export const Text = styled.p`
  color: #0732ef;
  font-size: 20px;
  width: 641px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 94%;
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
  margin-top: 70px;

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

// export const Image = styled.img`
//   border-radius: 20px;
// `;

export default Journey;
