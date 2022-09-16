import styled from "styled-components";

const Input = ({ id, type, name, content }) => {
    return (
        <Div>
            <Label htmlFor={id}> {content} </Label>
            <CampoInput type={type} name={name} id={id} required/>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-bottom: 3px;
`

const Label = styled.label`
    font-size: 16px;
`

const CampoInput = styled.input`
    border-radius: 3px;
    border: none;
    padding: 7px;
    font-size: 14px;
    outline-color: #387d4b;
`
export default Input