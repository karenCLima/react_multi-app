import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

// Estiliza o botão de retorno.
const ReturnButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: var(--quaternary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: var(--terciary-color);
    color:white;
  }
`;

const ReturnButton = ({onClickHandle}) => {
    return (
        <ReturnButtonStyled onClick={onClickHandle}>
            <FaArrowLeft /> Return
        </ReturnButtonStyled>
    )
}

export default ReturnButton