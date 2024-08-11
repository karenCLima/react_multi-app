import styled from 'styled-components'; // Importa styled-components para estilizar os componentes

// Define o estilo do container de resultados
const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const IPAddressData = ({ipData})=>{
    return(
        <Container>
          <p><strong>IP:</strong> {ipData.ip}</p>
          <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
          <p><strong>ISP:</strong> {ipData.org}</p>
        </Container>
    )
}

export default IPAddressData