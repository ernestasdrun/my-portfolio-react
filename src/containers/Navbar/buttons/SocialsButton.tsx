import React from "react";
import styled from "styled-components";

interface SocialsButtonProps {
  source: string,
  alternative: string,
}

const StyledSocialsButton = styled.button`
  position: relative;
  overflow: hidden;
  border: 1px solid #000;
  background: none;
  border-radius: 50%;
  padding: 6px;
  margin: 0 1.5rem 0 0rem;
    
  img {
    display: block;
    width: 26px;
    height: 26px;
    //filter: invert(92%) sepia(67%) saturate(2%) hue-rotate(67deg) brightness(107%) contrast(101%);
  }

  :after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: #b0eb9e;
    //border: 2px solid #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 50%;
    transform: scale(0%);
    transition: transform .3s;
    z-index: -1;
  }
    
  :hover {
    cursor: pointer;
    :after { transform: scale(100%); }
  }
`

const SocialsButton = ({ source, alternative }: SocialsButtonProps) => {
  return (
    <StyledSocialsButton onClick={() => console.log("test")}>
      <img src={source} alt={alternative} />
    </StyledSocialsButton>
  );
};

export default SocialsButton;