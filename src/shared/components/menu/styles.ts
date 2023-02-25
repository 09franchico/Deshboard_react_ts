import styled from "styled-components";


export const Container = styled.div`
    width: auto;

    @media (max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const MenuIcon = styled.div`
   display: flex;
   align-items: center;
   padding: 10px;
   :hover{
      background-color: #303030;
      cursor: pointer;
   }
   p{
    margin-left: 10px;
   }

   @media (max-width: 600px){
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const Menu = styled.div`
    width: 200px;
    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`