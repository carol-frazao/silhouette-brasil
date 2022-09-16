import styled from "styled-components"

const BtnSubmit = ({type, id, value}) => {
  return (
    <Input type={type} id={id} value={value} />
  )
}

const Input = styled.input`
    background: #E38B06;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
`

export default BtnSubmit