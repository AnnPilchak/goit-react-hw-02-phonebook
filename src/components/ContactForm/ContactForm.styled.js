import { styled } from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Label = styled.label`
    font-size: 20px;
    line-height: 24px;
`

const Input = styled.input`
    padding: 9px 0 9px 9px;
    margin-top: 7px;

    display: block;

    font-size: 16px;
    line-height: 20px;
    border-radius: 12px;
    border: 1px solid black;
`

export { Form, Label, Input };