import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  height: 50px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>Made by Ernestas Drungilas</p>
    </StyledFooter>
  );
};

export default Footer;