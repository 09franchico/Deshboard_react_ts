import styled from "styled-components";
import { Form as Unform } from '@unform/web'

export const Vform = styled(Unform)`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
   
`

export const Input = styled.input<{ tamanho: number }>`
    margin-top: 20px;
    height: 30px;
    width: ${props => props.tamanho+"px"};
    border-radius: 2px;
    border: none;

`

export const Label = styled.label`
    padding: 10px;
    margin-left: -5px;
    margin-bottom: -20px;

`