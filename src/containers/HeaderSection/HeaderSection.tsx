import React from "react";
import styled from "styled-components";
import programmingImage from "../../assets/images/undraw_code_inspection_bdl7.svg";

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 2rem 5rem 2rem;
  background-color: var(--primary-color);
  box-shadow: 0 0 0 100vmax var(--primary-color);
  clip-path: inset(0 -100vmax);

  @media screen and (min-width: 600px) {
    padding: 3rem 3rem 5rem 3rem;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row-reverse;
    padding: 7rem 5rem 8rem 5rem;
  }
`;

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
    max-width: 530px;
    max-height: 530px;
    margin-right: auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

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
      border: 2px solid #000;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      color: #000;
      background: #ffffff6e;
      transition: background-color 0.5s;
      user-select: none;

      :hover {
        background-color: #fff;
        cursor: pointer;
      }
    }
  }

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.9rem, 1.625rem + 1.375vw, 3rem);
  }

  h2 {
    font-size: clamp(1.4rem, 1.2rem + 1vw, 2.2rem);
  }

  @media screen and (min-width: 1000px) {
    text-align: end;
    align-self: center;
    div {
      align-self: flex-end;
    }
  }
`;

const HeaderSection = () => {
  return (
    <HeaderContainer id="header" aria-labelledby="header-title">
      <ContentContainer>
        <header>
          <h1>Hi, my name is Ernestas Drungilas</h1>
          <h2>I&apos;m a Front-End developer</h2>
        </header>
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
