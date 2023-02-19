import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import {Input, Label} from "./styles"


interface Props {
  name: string
  label?: string
}
type InputProps = JSX.IntrinsicElements['input'] & Props

export const VformPessoa = ({ name, label, ...rest }: InputProps)=> {

  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  return (
    <>
      {label && <Label htmlFor={fieldName}>{label}</Label>}
      <Input
        {...rest}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
      />
      {error && <span>{error}</span>}
    </>
  )
}