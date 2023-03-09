import React from "react";
import styled from "styled-components";
import MenuButton from "../buttons/MenuButton";

interface NavbarDrawerProps {
    isDrawerOpen: boolean,
    handleToggleDrawer: () => void,
}

interface DrawerContainerProps {
    isDrawerOpen: boolean,
}

const DrawerContainer = styled.div<DrawerContainerProps>`
    z-index: 100;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    padding: 0.9rem 0.7rem;

    transition: transform .2s ease-out;
    transform: ${props => props.isDrawerOpen ? "translateX(0%)" : "translateX(-100%)"};

    .react-icons {
        //color: red;
    }

    nav {
        flex-grow: 1;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        a {
            text-decoration: none;
            color: #000;
            font-size: 24px;
            font-weight: 700;
        }
    }
`

const NavbarDrawer = ({ isDrawerOpen, handleToggleDrawer }: NavbarDrawerProps) => {
    return (
        <DrawerContainer isDrawerOpen={isDrawerOpen}>
            <MenuButton menuClose={true} handleToggleDrawer={handleToggleDrawer} />
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </DrawerContainer>
    );
};

export default NavbarDrawer;