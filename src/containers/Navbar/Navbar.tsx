import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import { useScrolled } from "../../hooks/useScrolled";
import SocialsButton from "./buttons/SocialsButton";
import MenuButton from "./buttons/MenuButton";

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
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        left: 0;
        top: 0;
        background-color: #58bd55e1;
        padding: 0.8rem;
        transform: ${props.isScrolled ? "translateY(0)" : "translateY(-100%)"};
        transition: transform 0.2s ease-out;
        `
        :
        `
        position: static;
        display: flex;
        flex-direction: row;
        background-color: #58bd55;
        padding: 0.8rem;
        box-shadow: 0 0 0 100vmax #58bd55;
        clip-path: inset(0 -100vmax); 
        `
    }

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
    font-weight: 500;
    color: #fff;

    :after {
        content: "";
        border: 1px solid #fff;
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


    useEffect(() => {
        if (isSticky) setClientHeight(navRef.current?.clientHeight);
    }, [navRef, isMobile]);

    return (
        <NavbarContainer ref={navRef} isSticky={isSticky} isScrolled={isScrolled}>
            {isMobile ?
                <div>
                    <MenuButton />
                    <div>
                        <SocialsButton source={linkedinIcon} alternative="linkedin" />
                        <SocialsButton source={githubIcon} alternative="github" />
                    </div>
                </div>
                :
                <div>
                    <NavigationContainer>
                        <NavLink href="#">About</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#">Experience</NavLink>
                        <NavLink href="#">Projects</NavLink>
                        <NavLink href="#">Contact</NavLink>
                    </NavigationContainer>
                    <div>
                        <SocialsButton source={linkedinIcon} alternative="linkedin" />
                        <SocialsButton source={githubIcon} alternative="github" />
                    </div>
                </div>
            }
        </NavbarContainer>
    );
};

export default Navbar;