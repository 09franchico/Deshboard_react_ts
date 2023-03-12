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


//Css para body no Modal

export const ContainerView = styled.div`
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