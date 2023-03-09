import React from "react";
import { SlMenu } from 'react-icons/sl';
import { CgClose } from 'react-icons/cg';
import styled from "styled-components";

interface MenuButtonProps {
    menuClose?: boolean,
    handleToggleDrawer: () => void,
}

interface StyledMenuButtonProps {
    menuClose: boolean,
}

const StyledMenuButton = styled.button<StyledMenuButtonProps>`
    align-self: ${props => props.menuClose ? "flex-start" : "center"};
    padding: 2px;
    height: 30px;
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
`

const MenuButton = ({ menuClose = false, handleToggleDrawer }: MenuButtonProps) => {
    return (
        <StyledMenuButton menuClose={menuClose} onClick={handleToggleDrawer}>
            {menuClose ?
                <CgClose />
                :
                <SlMenu />
            }
        </StyledMenuButton>
    );
};

export default MenuButton;