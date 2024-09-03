import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import IPAddressFinderComponent from '../components/IPAddressComponents/IPAddressFinderComponent';

// Define o estilo do container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: var(--terciary-color);
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 50px auto;
`;


// Componente principal IPAddressFinder
const IPAddressFinder = () => {
  return (
    <Container>
      <IPAddressFinderComponent/>
    </Container>
  );
};

export default IPAddressFinder; // Exporta o componente IPAddressFinder como padrão
