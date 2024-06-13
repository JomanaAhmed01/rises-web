import React from "react";
import styled from "styled-components";
import Navbar from "../components/HomePage/Navbar";
import Header from "../components/HomePage/Header";

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Header />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffffe6;
`;

export default HomePageCompound;