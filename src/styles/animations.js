// animations.js

import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateX(-25px);
  //  opacity: 0%;
  }
  to {
    transform: translateX(0);
   // opacity: 100px;
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(50px);
   // opacity: 0%;
  }
  to {
    transform: translateX(0);
  //  opacity: 100px;
  }
`;
export const scale = keyframes`
  0% {
    
    transform: scale(0.5);
  }
 60% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`;
export const bottomToTop = keyframes` 
  0% {
      //opacity: 0;
      transform: scale(0);
      transform: translateY(50px);
  }
  100% {
      //opacity: 100;
      transform: scale(1);
      transform: translateY(0);
  }
`
export const topToBottom = keyframes` 
  0% {
      opacity: 0;
      transform: translateY(-50px);
  }
  100% {
      opacity: 100;
      transform: translateY(0);
  }
`

export const opacityBG =  keyframes`

  0% {
      opacity: 0.01;
      

  }
  100%{
      opacity: 0.1;

  }

`