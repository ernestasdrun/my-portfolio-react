import React from "react";
import styled from "styled-components";

interface SocialsButtonProps {
  source: string,
  alternative: string,
  link: string,
  bgColor: string,
}

interface StyledButtonProps {
  bgColor: string,
}

const StyledSocialsButton = styled.button<StyledButtonProps>`
  margin: 0 1.5rem 0 0rem;
  padding: 6px;
  border: 1px solid #000;
  border-radius: 50%;
  position: relative;
  background: none;
  overflow: hidden;

  :before {
    content: "";
    width: inherit;
    height: inherit;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.bgColor};
    transform: scale(0%);
    transition: transform .3s;
    z-index: -1;
  }
    
  :hover {
    cursor: pointer;
    :before { transform: scale(100%); }
  }

  img {
    display: block;
    width: 26px;
    height: 26px;
    //filter: invert(92%) sepia(67%) saturate(2%) hue-rotate(67deg) brightness(107%) contrast(101%);
  }
`

const SocialsButton = ({ source, alternative, link, bgColor }: SocialsButtonProps) => {
  return (
    <StyledSocialsButton bgColor={bgColor} onClick={() => console.log("test")}>
      <img src={source} alt={alternative} />
    </StyledSocialsButton>
  );
};

export default SocialsButton;