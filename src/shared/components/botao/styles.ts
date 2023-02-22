import styled from "styled-components";


export const Button = styled.button<{colorItem:string,borde?:string,hove:string}>`
   margin-left: 20px;
   border: 1px solid ${props => props.borde};
   width: 150px;
   height: 40px;
   background-color:${props => props.colorItem};
   border-radius: 5px;
   color: white;

   :hover{
      cursor:pointer;
      background-color: ${props => props.hove};

   }

`