import styled from 'styled-components';
import QRCodeComponent from '../components/QRCodeComponent/QRCodeComponent';

// Cria um componente estilizado chamado Container usando styled-components.
// Esse componente estiliza uma <div> com flexbox para centralizar o conteúdo e adicionar padding, bordas, e sombras.
const Container = styled.div`
  display: flex; // Define o layout como flexbox.
  flex-direction: column; // Organiza os itens em uma coluna.
  align-items: center; // Alinha os itens no centro horizontalmente.
  justify-content: center; // Alinha os itens no centro verticalmente.
  padding: 40px; // Adiciona padding de 40px ao redor do conteúdo.
  background: var(--terciary-color); // Define o fundo como branco.
  border-radius: 15px; // Adiciona bordas arredondadas de 15px.
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); // Adiciona uma sombra sutil ao redor do componente.
  max-width: 400px; // Define a largura máxima como 400px.
  margin: 0 auto; // Adiciona margem de 50px acima e abaixo e centraliza horizontalmente.
`;

// Define o componente funcional QRCodeGenerator.
const QRCodeGenerator = () => {
  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <QRCodeComponent/>
    </Container>
  );
};

// Exporta o componente QRCodeGenerator para que possa ser utilizado em outras partes da aplicação.
export default QRCodeGenerator;
