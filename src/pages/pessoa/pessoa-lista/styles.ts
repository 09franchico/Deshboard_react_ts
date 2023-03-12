import styled from "styled-components";


export const Container = styled.div`
    background-color: #262D47;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 2px;

    table{
        width: 100%;
        background-color: #DEDEDE;
        border: none;
        border-radius: 2px;
    }
    td{
        border-bottom: 1px solid grey;
        font-size: 15px;
        font-weight: bolder;
    }
    thead{
        
        td{
          font-size: 20px;
          font-weight: bolder;
        }
    }


    @media (max-width: 600px){

        table{
            font-size: 10px;
        }

        tr{
            width: 0px;
        }

        td{
            width: 0px;
            padding: 0px;
            font-size: 10px;
       
        }
        
      }
`

export const Td = styled.td`
    text-align: center;
    flex-direction: row;
    width: 80px;
    :hover{
        cursor: pointer;
    }

    @media (max-width: 600px){
        width: 0px;

    }

`

export const Button = styled.button`
   height: 40px;
   width: 400px;
   border: none;
   background-color: green;
   margin-top: 20px;
   border-radius: 20px;

`


export const Model = styled.div`
    padding: 20px;
    border-radius: 5px;
    background-color: #262D47;
    display: flex;
    flex-direction: column;
    color: white;
    

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



