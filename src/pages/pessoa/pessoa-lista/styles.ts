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
        padding: 10px;
        border-bottom: 1px solid grey;
    }
`

export const Td = styled.td`
    text-align: center;
    width: 10px;
    :hover{
        cursor: pointer;
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