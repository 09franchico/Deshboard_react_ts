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
        background-color: white;
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
    width: 0px;
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