import React from "react";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

interface MenuButtonProps {
  isDrawerOpen: boolean;
  handleToggleDrawer: () => void;
}

const StyledMenuButton = styled.button`
  align-self: center;
  height: 30px;
  padding: 2px;
  margin-left: 0.5rem;
  border: none;
  background: none;

  .react-icons {
    width: 26px;
    height: 26px;
  }

  :hover {
    cursor: pointer;
  }
`;

const MenuButton = ({ isDrawerOpen, handleToggleDrawer }: MenuButtonProps) => {
  return (
    <StyledMenuButton onClick={handleToggleDrawer}>
      {isDrawerOpen ? <CgClose /> : <SlMenu />}
    </StyledMenuButton>
  );
};

export default MenuButton;
