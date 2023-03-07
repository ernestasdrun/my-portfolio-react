import React from "react";
import { IconContext } from "react-icons/lib";
import { SlMenu } from 'react-icons/sl';
import styled from "styled-components";

const StyledMenuButton = styled.button`
    align-self: center;
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

const MenuButton = () => {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <StyledMenuButton>
                <SlMenu />
            </StyledMenuButton>
        </IconContext.Provider>
    );
};

export default MenuButton;