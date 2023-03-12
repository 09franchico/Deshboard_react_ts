import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    z-index: 9999;
    width: 100%;
`

export const Ldshourglas = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ldshourglass 1.2s infinite;
  }

  @keyframes ldshourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }

`

