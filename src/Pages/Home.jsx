// Importa hooks e componentes do React e bibliotecas externas.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from '../context/AuthProvider';
import QRCodeGenerator from "./QRCodeGenarator";
import IPAddressFinder from "./IPAddressFinder";
import MovieSearchEngine from "./MovieSearchEngine";
import TodoApp from "./TodoApp";
import QuizApp from "./QuizApp";
import LanguageTranslator from "./LanguageTranslator";
import Login from "./Login";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "../components/HomeComponents/CarouselComponent";
import { useAccess } from "../context/AccessContext";
import NavBarComponent from "../components/HomeComponents/NavBarComponent";
import ReturnButton from "../components/HomeComponents/ReturnButton";
import NavBarToggle from "../components/HomeComponents/NavBarToggle";

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
`;

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  z-index:1;
`;

// Estiliza o contêiner do carrossel.
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 50%;
  margin: auto;
  background-color: var(--terciary-color);
  border-radius: 20px;
  padding: 20px;
`;

// Estiliza o rodapé do aplicativo.
const Footer = styled.div`
  width: 100%;
  background-color: var(--quaternary-color);
  color: white;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: 12px;
  }
`;


// Define o componente principal do aplicativo.
const Home = () => {
  // Cria estados para autenticação, visibilidade da barra de navegação, componente atual, e índice do carrossel.
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const { handleAccess, selectedId, currentPage, changeIndex } = useAccess();
  const navigate = useNavigate(); // Hook para navegação.
  const { handleChangeToken } = useAuth();
  


  // Função para simular logout e redirecionar para a página de login.
  const handleLogout = () => {
    handleChangeToken(null);
    navigate("/login", { replace: true });
  };

  // Alterna a visibilidade da barra de navegação.
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  // Função para retornar ao carrossel principal.
  const handleReturn = () => {
    handleAccess(null, null);
  };

  // Função para renderizar o componente atual com base no estado.
  const renderComponent = () => {
    switch (currentPage) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

  // Renderiza o componente principal.
  return (
    
    <AppContainer>
    <NavBarToggle onClickHandle={toggleNavBar} />
    <NavBarComponent isopen={isNavBarOpen} onClickHandle={handleLogout} />
    <MainContent>
      {currentPage ? (
        <>
          {renderComponent()}
          <ReturnButton onClickHandle={handleReturn} />
        </>
      ) : (
        <CarouselContainer>
          <CarouselComponent
            selectedItem={selectedId}
            onChange={(index) => changeIndex(index)}
          />
        </CarouselContainer>
      )}
      <Footer>© 2024 Your Company | All rights reserved</Footer>
    </MainContent>
  </AppContainer>
    
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default Home;
