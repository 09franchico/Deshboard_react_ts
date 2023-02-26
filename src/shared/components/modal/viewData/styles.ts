import styled from "styled-components";


export const Container = styled.div<{status:boolean}>`
   display: ${props => props.status ? 'flex' : 'none'};
   position: fixed;
   justify-content: center;
   align-items: center;
   left: 0px;
   top: 0px;
   right: 0px;
   bottom: 0px;
   z-index: 900px;
   background-color: rgba(0,0,0,0.7);

`


export const ModelBody = styled.div`
    padding: 20px;
    border-radius: 5px;
    background-color: #262D47;
    display: flex;
    flex-direction: column;
    color: white;
    box-shadow: 0px 0px 50px black;

    div{
       margin: 10px;
       display: flex;
       
    }
    

    @media (max-width: 600px){
        font-size: 9px;
        padding: 5px;
   }

`

export const Span = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;

  h2{
   margin-bottom: 2px;
  }

`

export const ConatinerBuuton = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const ButtonVoltar = styled.button<{colorItem:string,borde?:string,hove:string}>`
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
        width: 200px;
        margin-left: 0px;
        margin-top: 10px;
        
   }

`