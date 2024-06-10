import React from "react";
import styled from "styled-components";
import { PersonCircle } from "@styled-icons/ionicons-solid/PersonCircle";
import { Menu } from "@styled-icons/evaicons-solid/Menu";

function Navbar() {
  return (
    <Wrapper>
      <MainWrapper>
        <HeaderWrapper>
          <Header>Rises</Header>
        </HeaderWrapper>

        <ItemsWrapper>
          <Item>About Us</Item>
          <Item>Our Services</Item>
          <Item>Let's Talk</Item>
          <ItemSpecialWrapper>
            <ProfileIcon />
            <Item>Log In</Item>
          </ItemSpecialWrapper>
        </ItemsWrapper>

        <MenuIcon />
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffffe6;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 30px 0px 100px;

  @media screen and (max-width: 900px) {
    margin: 0px 30px 0px 40px;
  }
`;

export const HeaderWrapper = styled.div``;

export const Header = styled.p`
  color: #0732ef;
  font-size: 24px;
  font-weight: bold;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.p`
  color: #0732ef;
  font-size: 20px;
`;

export const ItemSpecialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90px;
`;

export const ProfileIcon = styled(PersonCircle)`
  width: 25px;
  height: 25px;
  color: #0732ef;
`;

export const MenuIcon = styled(Menu)`
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
    color: #0732ef;
    width: 40px;
    height: 40px;
  }
`;

export default Navbar;
