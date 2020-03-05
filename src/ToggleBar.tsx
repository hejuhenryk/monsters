import React, { useState } from "react";
import styled from "styled-components";
type ToggleBarPropsT = {
  logo: any;
};

export const ToggleBar: React.FC<ToggleBarPropsT> = props => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <ToggleBarStyled >
        <Logo>{props.logo}</Logo>
        <div className='mask'></div>
        <nav  onClick={()=>setIsHidden(true)} className={`${!isHidden ? "show" : "dontShow"}`}>
          {props.children}
        </nav>
        <div className="hamburger">
          <HamburgerButton
            onClick={() => setIsHidden(!isHidden)}
            isOpen={!isHidden}
            height="3rem"
            color="#888"
          />
        </div>
      </ToggleBarStyled>
      <div style={{height: '4rem', width: '100vw'}}></div>
    </>
  );
};

const ToggleBarStyled = styled.nav`
  position: fixed;
  padding: 0 0.5rem;
  height: 4rem;
  width: 100vw;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 100;
  .activeLink {
    border-bottom: 1px solid black;
    filter: drop-shadow( 1px 1px 5px rgba(5, 124, 98, .7));
  }
  .mask {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: white;
    left: 0;
    z-index: 10;
    @media (min-width: 1000px) {
      z-index: -1;
    }
  }
  & > div {
    height: 100%;
    z-index: 20;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
    border: 0;
    top: -100vh;
    opacity: 0;
    left: 0;
    height: min-content;
    z-index: 10;
    transition: all .5s ease-in-out,
      left 0.5s cubic-bezier(0.01, 1.04, 1, -0.06);
     
    @media (min-width: 1000px) {
      position: relative;
      flex-direction: row;
      top: 0;
      opacity: 1;
      height: 100%;
      width: 90%;
    }
  }
  nav > * {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    text-decoration: none;
    color: black;
  }
  .hamburger {
    z-index: 20;
    @media (min-width: 1000px) {
      display: none;
    }
  }
  .show {
    top: 4rem;
    left: 0;
    opacity: 1;
    background-color: #cccccccc;
    padding: 0.5rem 0;
    position: absolute;
    z-index: 5;
    @media (min-width: 1000px) {
      position: relative;
      flex-direction: row;
      top: 0;
      height: 100%;
      background-color: transparent;
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  * {
    filter: drop-shadow( 4px 5px 5px rgba(0, 0, 0, .7));
    height: 80%;
  }
`;

const HamburgerButton: React.FC<{
  onClick: () => void;
  isOpen: boolean;
  height: string;
  color: string;
}> = props => {
  return (
    <HamburgerIcon
      height={props.height}
      color={props.color}
      className={props.isOpen ? "open" : "null"}
      onClick={props.onClick}
    >
      <div></div>
    </HamburgerIcon>
  );
};
const HamburgerIcon = styled.div<{ height: string; color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  height: ${p => p.height};
  width: ${p => p.height};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  & div,
  ::before,
  ::after {
    content: "";
    height: calc(${p => p.height} / 6);
    width: 100%;
    background-color: ${p => p.color};
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }
  ::after,
  ::before {
    transform-origin: center center;
  }
  &.open::after {
    transform: translateY(calc(-${p => p.height} / 4 - ${p => p.height} / 24))
      rotate(-405deg);
  }

  &.open::before {
    transform: translateY(calc(${p => p.height} / 4 + 1px)) rotate(405deg);
  }
  &.open div {
    transform: scale(0);
  }
`;
