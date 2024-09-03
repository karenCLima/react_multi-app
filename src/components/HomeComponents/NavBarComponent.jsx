import styled from "styled-components";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
} from "react-icons/fa";
import { useAccess } from "../../context/AccessContext";
import {Link } from 'react-router-dom'

// Estiliza a barra de navegação.
const NavBar = styled.div`
  width: 240px;
  background-color: var(--quaternary-color);
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ $isopen }) => ($isopen ? "flex" : "none")};
  }
`;

// Estiliza os links na barra de navegação.
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: var(--terciary-color);
    border-radius:20px;
    color:#fff;
  }
`;

const NavBarComponent = ({isopen, onClickHandle}) => {

    const { handleAccess } = useAccess();

    return (
        <NavBar $isopen={isopen}>
            <StyledLink onClick={() => handleAccess(0, "QRCodeGenerator")}>
                <FaQrcode />
                QR Code Generator
            </StyledLink>
            <StyledLink onClick={() => handleAccess(1, "IPAddressFinder")}>
                <FaNetworkWired />
                IP Address Finder
            </StyledLink>
            <StyledLink onClick={() => handleAccess(2, "MovieSearchEngine")}>
                <FaSearch />
                Movie Search
            </StyledLink>
            <StyledLink onClick={() => handleAccess(3, "TodoApp")}>
                <FaTasks />
                Todo App
            </StyledLink>
            <StyledLink onClick={() => handleAccess(4, "QuizApp")}>
                <FaRegQuestionCircle />
                Quiz App
            </StyledLink>
            <StyledLink onClick={() => handleAccess(5, "LanguageTranslator")}>
                <FaGlobeAmericas />
                Translator
            </StyledLink>
            <button
                onClick={onClickHandle}
                style={{
                    marginTop: "20px",
                    color: "black",
                    backgroundColor: "#F7EFE5",
                    border: "none",
                    borderRadius: "20px",
                    boxShadow: "15px rgba(0,0,0,0.3)"
                }}
            >
                Logout
            </button>
        </NavBar>
    )
}

export default NavBarComponent