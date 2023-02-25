import styled from "styled-components";


export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     
`

export const Text = styled.div`
   padding: 10px;

`

export const AreaButton = styled.div`
    padding: 10px;

    @media (max-width: 600px){
        display: flex;
        padding: 0px;
   }
`