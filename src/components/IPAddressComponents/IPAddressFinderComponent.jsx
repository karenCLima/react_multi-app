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

//Define o estilo da mensagem de erro
const ErrorMessage = styled.p`
    color: red;
    font-size: 18px;
`


const IPAddressFinderComponent = ()=>{
    const [ip, setIp] = useState(''); // Define o estado para o IP digitado pelo usuário
    const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP
    const [errors, setErrors] = useState({}); // Declara um estado errors para armazenar mensagens de erro

    //Função que valida se existe erro
    const validate = ()=>{
      const newErrors = {}; //Objeto para armazenar novos erros

      // Expressões regulares para validar IPv4 e IPv6
      const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      const ipv6Pattern = /^(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){1,6}|:):([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){1,5}|:):(([0-9a-fA-F]{1,4}:){1,4}|:):([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){1,4}|:):(([0-9a-fA-F]{1,4}:){1,4}|:):(([0-9a-fA-F]{1,4}:){1,3}|:):([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){1,2}|:):(([0-9a-fA-F]{1,4}:){1,4}|:):(([0-9a-fA-F]{1,4}:){1,4}|:):(([0-9a-fA-F]{1,4}:){1,3}|:):([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){1,4}|:):(([0-9a-fA-F]{1,4}:){1,3}|:):(([0-9a-fA-F]{1,4}:){1,3}|:):(([0-9a-fA-F]{1,4}:){1,2}|:):([0-9a-fA-F]{1,4}|:))$/;

      if(!ip){
        newErrors.ipAddressery = "It is mandatory to insert a IP Address "
          //Se input vazio retorna erro
      } else if(!ipv4Pattern.test(ip) && !ipv6Pattern.test(ip)){
        newErrors.ipAddress = "Invalid IP Address. Please insert a valid IPv4 or IPv6 address.";
        //Se ip invalido retorna erro
      }

      return newErrors;//retorna objeto de novos erros
    }

    // Função para buscar os dados do IP
    const findIP = async () => {

      const validationErros = validate(); //chama a função validate para validar o input

      if(Object.keys(validationErros).length === 0){
        try {
          const url = `https://ipinfo.io/${ip}/json`
          const response = await axios.get(url); // Faz uma requisição GET para a API ipinfo.io
          setIpData(response.data); // Armazena os dados da resposta no estado ipData
        } catch (error) {
          console.error("Error fetching IP address data:", error); // Exibe um erro no console em caso de falha
          alert("Sorry! Error fetching IP address data. Try Again!")
          }

          setErrors({})//limpam os erros, caso existam
      }else{
        // Define os erros de validação no estado errors
        setErrors(validationErros)
      }
        
    };

    return (
        <>
        <Title>IP Address Finder</Title>
        <Input
            type="text"
            value={ip} // Valor do campo de entrada é ligado ao estado ip
            name="ipAddress"
            onChange={(e) => setIp(e.target.value)} // Atualiza o estado ip conforme o usuário digita
            placeholder="Enter IP address" // Placeholder do campo de entrada
        />
        {/* Exibe a mensagem de erro se houver erro no campo 'ipAddress' */}
        {errors.ipAddress && <ErrorMessage>{errors.ipAddress}</ErrorMessage>}
        <Button onClick={findIP}>Find IP</Button> {/* Botão que chama a função findIP quando clicado */}
        {ipData && ( // Condicional que exibe os dados do IP se ipData não for null
            <IPAddressData key={ipData.ip} ipData={ipData}/>
        )}
        </>
    );
}

export default IPAddressFinderComponent