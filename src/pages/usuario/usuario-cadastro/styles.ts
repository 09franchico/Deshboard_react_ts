import styled from "styled-components";



export const Container = styled.div`
     margin: 10px;
     text-align: left;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 50px;
`


export const ConatinerButton = styled.div`
   margin-left: 20px;
   margin-top: 50px;
   justify-content: end;
   
   @media (max-width: 600px){
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 0px;
    }
`

export const ButtonSave = styled.button<{colorItem:string,borde?:string,hove:string}>`
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

   @media (max-width: 600px){
        width: 320px;
        margin-left: 0px;
        margin-top: 10px;
        
   }

`
