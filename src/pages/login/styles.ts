import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;

     img{
        margin-top: 407px;
     }
`
export const ViewLogin = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #262D47;
    border-radius: 5px;
    z-index: 9999;
    position: absolute;

`

export const IconSvg = styled.div`
 background-color: red;


`

export const Button = styled.button`
    padding:10px;
    margin-top: 30px;
    width: 200px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #00E396;

    :hover{
        background-color: #00E380;
        cursor: pointer;
    }
    


`