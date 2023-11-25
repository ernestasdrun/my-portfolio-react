import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import { useScrolled } from "../../hooks/useScrolled";
import RoundedLinkButton from "../../components/buttons/RoundedLinkButton";
import MenuButton from "./buttons/MenuButton";
import NavbarDrawer from "./mobileDrawer/NavbarDrawer";
import { LINKEDIN_LINK, GITHUB_LINK } from "../../data/socials";
import { ITheme } from "../../assets/theme/theme";

interface NavbarProps {
  currTheme: ITheme;
  setCurrTheme: React.Dispatch<React.SetStateAction<ITheme>>;
}

interface NavbarContainerProps {
  isScrolled: boolean;
}

const NavbarContainer = styled.nav<NavbarContainerProps>`
  display: flex;
  flex-direction: row;
  padding: 0.8rem;
  position: sticky;
  top: 0;
  background-color: ${(props) => (props.isScrolled ? "#fcfcfcf8" : "#fcfcfc")};
  box-shadow: 0 0 0 100vmax #fcfcfc;
  clip-path: inset(0 -100vmax);
  z-index: 101;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    max-width: 1600px;

    > div {
      margin-left: auto;
    }
  }
`;

const NavigationContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10rem 0 18rem;

  @media (max-width: 1360px) {
    margin: 0 7rem 0 10rem;
  }

  @media (max-width: 1050px) {
    margin: 0 2rem 0 4rem;
  }

  @media (max-width: 900px) {
    margin: 0 1rem 0 1rem;
  }
`;

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
    transition: transform 0.3s;
  }

  :hover {
    :after {
      transform: scaleX(100%);
    }
  }
`;

const Navbar = ({ currTheme, setCurrTheme }: NavbarProps) => {
  const themeContext = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isScrolled = useScrolled(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
    document.body.style.overflow = isDrawerOpen ? "auto" : "hidden";
  };

  return (
    <>
      <NavbarContainer isScrolled={isScrolled}>
        {isMobile ? (
          <div>
            <MenuButton
              isDrawerOpen={isDrawerOpen}
              handleToggleDrawer={handleToggleDrawer}
            />
            <div>
              <RoundedLinkButton
                source={linkedinIcon}
                alternative="linkedin"
                link={LINKEDIN_LINK}
                bgColor="#b0eb9e"
              />
              <RoundedLinkButton
                source={githubIcon}
                alternative="github"
                link={GITHUB_LINK}
                bgColor="#b0eb9e"
              />
            </div>
          </div>
        ) : (
          <div>
            <NavigationContainer>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </NavigationContainer>
            <div>
              <RoundedLinkButton
                source={linkedinIcon}
                alternative="linkedin"
                link={LINKEDIN_LINK}
                bgColor="#b0eb9e"
              />
              <RoundedLinkButton
                source={githubIcon}
                alternative="github"
                link={GITHUB_LINK}
                bgColor="#b0eb9e"
              />
            </div>
          </div>
        )}
      </NavbarContainer>
      <NavbarDrawer
        isDrawerOpen={isDrawerOpen}
        handleToggleDrawer={handleToggleDrawer}
      />
    </>
  );
};

export default Navbar;
