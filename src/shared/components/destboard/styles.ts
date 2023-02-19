import styled from "styled-components";


export const Container = styled.div`
    color: #FFF;
    background-color: #1B213B;
    min-height: 100vh;
    display: flex;
`

export const Menu = styled.div <{ slug: boolean }>`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #262626;
   display: inline-block;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   direction: ltr;
   width: ${props => props.slug ? "230px" : "45px"};
   transition: all 1s ease-out;

   hr{
      margin-top: 20px;
    }
      


`

export const Icon = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    background-color: #1B213B;

`

export const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

`

export const Header = styled.div`
    background-color: #262D47;
    display: flex;
    justify-content: space-between;
    height: 50px;
    h4{
        margin: 10px;
    }
    img:hover{
        cursor: pointer;
    }

`

export const HeaderLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

`

export const Body = styled.div`
    height: 100%;
    color: black;
    font-family: roboto;
`


export const ConfigLogout = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

`