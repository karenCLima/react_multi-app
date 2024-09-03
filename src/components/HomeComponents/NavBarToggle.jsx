import styled from "styled-components";
import { FaBars } from "react-icons/fa";

// Estiliza o botão de alternância da barra de navegação.
const NavBarToggleStyled = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavBarToggle = ({onClickHandle})=>{
    return(
        <NavBarToggleStyled onClick={onClickHandle}>
          <FaBars size={24} color="#2C3E50" />
        </NavBarToggleStyled>
    )
}

export default NavBarToggle