import styled from "styled-components";


export const Container = styled.div<{ativo:boolean}>`
    display: ${props => props.ativo ? "flex" : "none"};
    margin: 80px 10px 10px 10px;
    justify-content:space-between;
    align-items: center;
    border-radius: 5px;
    background-color: #262D47;
    padding: 15px;
    
    button{
        width: 100px;
        height: 30px;
        border-radius: 5px;
        border: none;
        background-color: #008FFB;
        color: white;
        cursor: pointer;
    }

    input{
        width: 300px;
        height: 25px;
        border: none;
        border-radius: 5px;
        background-color: white;
        padding: 5px;

    }

`