import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import IPAddressData from './IPAddressData';

// Define o estilo do título
const Title = styled.h2`
  color: grey;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid var(--terciary-color);
  border-radius: 20px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--terciary-color);
    outline: none;
  }
`;

// Define o estilo do botão
const Button = styled.button`
  padding: 12px 20px;
  background-color: var(--secondary-color);
  color: grey;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-color);
  }
`;


const IPAddressFinderComponent = ()=>{
    const [ip, setIp] = useState(''); // Define o estado para o IP digitado pelo usuário
    const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP

    // Função para buscar os dados do IP
    const findIP = async () => {
        try {
        const url = `https://ipinfo.io/${ip}/json`
        const response = await axios.get(url); // Faz uma requisição GET para a API ipinfo.io
        setIpData(response.data); // Armazena os dados da resposta no estado ipData
        } catch (error) {
        console.error("Error fetching IP address data:", error); // Exibe um erro no console em caso de falha
        }
    };

    return (
        <>
        <Title>IP Address Finder</Title>
        <Input
            type="text"
            value={ip} // Valor do campo de entrada é ligado ao estado ip
            onChange={(e) => setIp(e.target.value)} // Atualiza o estado ip conforme o usuário digita
            placeholder="Enter IP address" // Placeholder do campo de entrada
        />
        <Button onClick={findIP}>Find IP</Button> {/* Botão que chama a função findIP quando clicado */}
        {ipData && ( // Condicional que exibe os dados do IP se ipData não for null
            <IPAddressData key={ipData.ip} ipData={ipData}/>
        )}
        </>
    );
}

export default IPAddressFinderComponent