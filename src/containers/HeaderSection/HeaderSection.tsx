import React from "react";
import styled from "styled-components";
import programmingImage from "../../assets/images/undraw_code_inspection_bdl7.svg"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 2rem 5rem 2rem;
  background-color: #b5e2b5;
  box-shadow: 0 0 0 100vmax #b5e2b5;
  clip-path: inset(0 -100vmax);
  
  @media screen and (min-width: 600px) {
    padding: 3rem 3rem 5rem 3rem;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row-reverse;
    height: 450px;
    padding: 5rem 9rem 8rem 9rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
  }

  @media screen and (min-width: 600px) {
    img {
        width: 60%;
        height: 60%;
    }
  }

  @media screen and (min-width: 1000px) {
    flex-grow: 1;

    img {
        width: 130%;
        height: 130%;
    }
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    gap: 1rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        width: 200px;
        border: 2px solid #2e5c34;
        font-weight: 700;
        font-size: 1rem;
        text-decoration: none;
        color: #000;
        background: #ffffff6e;
        transition: background-color .5s;
    
        :hover {
          background-color: white;
          cursor: pointer;
        }
      }
  }


  @media screen and (min-width: 1000px) {
    text-align: end;
    align-self: center;
    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.7rem; }
    div { align-self: flex-end; }
  }
`

const HeaderSection = () => {
    return (
        <HeaderContainer id="header">
            <ContentContainer>
                <h1>Hey, my name is Ernestas Drungilas</h1>
                <h2>I&apos;m a Front-End developer</h2>
                <div>
                    <a>Download Resume</a>
                    <a href="#contact">Contact me</a>
                </div>
            </ContentContainer>
            <ImageContainer>
                <img src={programmingImage} alt="programmer_image" />
            </ImageContainer>
        </HeaderContainer>
    );
};

export default HeaderSection;