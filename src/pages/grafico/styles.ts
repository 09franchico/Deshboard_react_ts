import styled from "styled-components";


export const Container = styled.div`

`

export const Itens = styled.div`
  margin: 20px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #262D47;

`

export const Items = styled.div<{stylo:string}>`
    border: 1px solid white;
    height: 120px;
    width: 250px;
    border-radius: 10px;
    margin: 20px;
    background-color: ${props => props.stylo};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    
`

export const Grafico = styled.div`
   margin-top: 50px;
   padding: 20px;
   display: flex;
   justify-content: center;
   align-items: center;

`
