import React from "react";
import styled from "styled-components";

interface NavbarDrawerProps {
  isDrawerOpen: boolean;
  handleToggleDrawer: () => void;
}

interface DrawerContainerProps {
  isDrawerOpen: boolean;
}

const DrawerContainer = styled.div<DrawerContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.9rem 0.7rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  transition: transform 0.2s ease-out;
  transform: ${(props) =>
    props.isDrawerOpen ? "translateX(0%)" : "translateX(-100%)"};
  z-index: 100;

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    gap: 5rem;

    a {
      font-size: 24px;
      font-weight: 700;
      color: #000;
      text-decoration: none;
    }
  }
`;

const NavbarDrawer = ({
  isDrawerOpen,
  handleToggleDrawer,
}: NavbarDrawerProps) => {
  return (
    <DrawerContainer isDrawerOpen={isDrawerOpen}>
      <nav>
        <a href="#about" onClick={handleToggleDrawer}>
          About
        </a>
        <a href="#skills" onClick={handleToggleDrawer}>
          Skills
        </a>
        <a href="#projects" onClick={handleToggleDrawer}>
          Projects
        </a>
        <a href="#contact" onClick={handleToggleDrawer}>
          Contact
        </a>
      </nav>
    </DrawerContainer>
  );
};

export default NavbarDrawer;
