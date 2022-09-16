import styled from "styled-components";

const InputCheckbox = ({ id, name, content }) => {
    return (
        <Li>
            <Label htmlFor={id}> {content} </Label>
            <input type="checkbox" name={name} id={id}/>
        </Li>
    )
}

const Li = styled.li`
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    padding-bottom: 5px;
`

const Label = styled.label`
    padding-left: 5px;
    font-size:  16px;
`

export default InputCheckbox
