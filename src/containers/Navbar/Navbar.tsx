import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import { useScrolled } from "../../hooks/useScrolled";
import SocialsButton from "./buttons/SocialsButton";
import MenuButton from "./buttons/MenuButton";
import NavbarDrawer from "./mobileDrawer/NavbarDrawer";

interface NavbarProps {
    isSticky: boolean,
}

interface NavbarContainerProps {
    isScrolled: boolean,
    isSticky: boolean,
}

const NavbarContainer = styled.div<NavbarContainerProps>`
    ${props =>
        props.isSticky ?
            
            `
            position: fixed;
            justify-content: center;
            width: 100%;
            left: 0;
            top: 0;
            background-color: #fcfcfcf8;
            transform: ${props.isScrolled ? "translateY(0)" : "translateY(-100%)"};
            transition: transform 0.2s ease-out;
            box-shadow: ${props.isScrolled ? "0 2px 5px 0 rgba(0, 0, 0, 0.7)" : "none"};
            z-index: 1;
            `
            :
            `
            position: static;
            background-color: #fcfcfc;
            box-shadow: 0 0 0 100vmax #fcfcfc;
            clip-path: inset(0 -100vmax);
            ` 
            
            /*`
            position: fixed;
            justify-content: center;
            width: 100%;
            left: 0;
            top: 0;
            background-color: #fcfcfcf8;
            transform: ${props.isScrolled ? "translateY(0)" : "translateY(-100%)"};
            transition: transform 0.2s ease-out;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.7);
            z-index: 1;
            `
            :
            `
            position: sticky;
            top: 0;
            background-color: ${props.isScrolled ? "#fcfcfcf8" : "#fcfcfc"};
            box-shadow: 0 0 0 100vmax #fcfcfc, 0 0 5px 0 #000000;
            clip-path: inset(0 -100vmax);
            z-index: 1;
            `*/
    }

    display: flex;
    flex-direction: row;
    padding: 0.8rem;

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 1600px;
        flex-grow: 1;

        > div { margin-left: auto; }
    }

`

const NavigationContainer = styled.nav`
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 10rem 0 18rem;

    @media (max-width: 1360px) { margin: 0 7rem 0 10rem; }

    @media (max-width: 1050px) { margin: 0 2rem 0 4rem;}

    @media (max-width: 900px) { margin: 0 1rem 0 1rem; }
`

const NavLink = styled.a`
    display: inline-flex;
    flex-direction: column;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    color: #000;

    :after {
        content: "";
        border: 2px solid #5fb645;
        border-radius: 15%;
        transform: scaleX(0%);
        transition: transform .3s;
    }

    :hover {
        :after { transform: scaleX(100%); }
    }
`

const Navbar = ({ isSticky }: NavbarProps) => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const navRef = useRef<HTMLDivElement>(null);
    const [clientHeight, setClientHeight] = useState<number | undefined>(undefined);
    const isScrolled = useScrolled(clientHeight);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        if (isSticky) setClientHeight(navRef.current?.clientHeight);
    }, [navRef, isMobile]);

    const handleToggleDrawer = () => {
        setIsDrawerOpen(prevIsDrawerOpen => !prevIsDrawerOpen);
        document.body.style.overflow = isDrawerOpen ? "auto" : "hidden";
    };

    return (
        <>
            <NavbarContainer ref={navRef} isSticky={isSticky} isScrolled={isScrolled}>
                {isMobile ?
                    <div>
                        <MenuButton handleToggleDrawer={handleToggleDrawer} />
                        <div>
                            <SocialsButton source={linkedinIcon} alternative="linkedin" />
                            <SocialsButton source={githubIcon} alternative="github" />
                        </div>
                    </div>
                    :
                    <div>
                        <NavigationContainer>
                            <NavLink href="#about">About</NavLink>
                            <NavLink href="#skills">Skills</NavLink>
                            <NavLink href="#experience">Experience</NavLink>
                            <NavLink href="#projects">Projects</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </NavigationContainer>
                        <div>
                            <SocialsButton source={linkedinIcon} alternative="linkedin" />
                            <SocialsButton source={githubIcon} alternative="github" />
                        </div>
                    </div>
                }
            </NavbarContainer>
            <NavbarDrawer isDrawerOpen={isDrawerOpen} handleToggleDrawer={handleToggleDrawer}/>
        </>
    );
};

export default Navbar;