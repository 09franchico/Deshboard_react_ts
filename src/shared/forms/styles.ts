import styled from "styled-components";
import { Form as Unform } from '@unform/web'



export const Vform = styled(Unform)`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 600px){
        flex-direction: column;
        
    }
   
`

export const Input = styled.input<{ tamanho: number }>`
    margin-top: 20px;
    margin-left: 20px;
    height: 35px;
    width: ${props => props.tamanho+"px"};
    border-radius: 2px;
    border: none;

    @media (max-width: 600px){
        flex-direction: column;
        width: 320px;
        margin-left:0px;
    }

`

export const Label = styled.label`
    padding: 10px;
    margin-left: 10px;
    margin-bottom: -20px;

    @media (max-width: 600px){
        margin-left: -10px;
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`



//Form styles do login
export const VformLoginStyle = styled(Unform)`
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px){
        flex-direction: column;
        
    }
   
`

export const InputLogin = styled.input<{ tamanho: number }>`
    margin-top: 20px;
    font-size: 15px;
    padding: 5px;
    height: 35px;
    width: ${props => props.tamanho+"px"};
    border-radius: 2px;
    border: none;

    @media (max-width: 600px){
        flex-direction: column;
        width: 320px;
        margin-left:0px;
    }

`

export const LabelLogin = styled.label`
    margin-bottom: -10px;


    @media (max-width: 600px){
        margin-left: -10px;
    }

`


//form Usuario
export const FormUsuario = styled(Unform)`
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px){
        flex-direction: column;
        
    }
   
`
