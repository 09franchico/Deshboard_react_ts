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
    height: 300px;
    width: 500px;
    align-items: center;
    border-radius: 5px;
    background-color: #262D47;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

`