import axios from 'axios';
import { useState } from 'react'; // Importa o hook useState do React
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import imagem_login from '../imagens/imagem_login.png'

// Define o estilo do container principal do login
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:14%;
  background-color: var(--primary-color);
  height:100vh;
`;

//Define o estilo do cointainer da imagem do login
const LoginImage = styled.div`
  width:60%;
  img{
    width:100%;
    height: 80%;
  }
`;

// Define o estilo do formulário de login
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--terciary-color);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  width: 200px;
`;

// Define o estilo do botão
const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }
`;

// Componente principal de Login
// eslint-disable-next-line react/prop-types
const Login = () => {
  const [username, setUsername] = useState(''); // Define o estado para o nome de usuário
  const [password, setPassword] = useState(''); // Define o estado para a senha
  const { handleChangeToken } = useAuth();
  const navigate = useNavigate();

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Busca os usuários do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se existe algum usuário com o username e password fornecidos
    const userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
      try {
        // Faz a requisição de login para obter o token JWT

        const response = await axios.post('https://dev-zaq1o35n26l6tb17.us.auth0.com/oauth/token', {
          client_id: 'TAg5HLCct9vvfizjl447wXPMV3FRBAoN',
          client_secret: 'cDzLMc1GkSAb0LPIopNwAOehNKYKe11K3x3S7QUTXWwpKHM5N0PmeUX503bBT54t',
          audience: 'https://dev-zaq1o35n26l6tb17.us.auth0.com/api/v2/',
          grant_type: 'client_credentials'
        }, {
          headers: { 'Content-Type': 'application/json' }
        });

        const response_token  = response.data.access_token;

        // Armazena o token no contexto de autenticação
        handleChangeToken(response_token );
        // Aqui você pode redirecionar o usuário para outra página ou fazer algo mais
        navigate('/home')
      } catch (error) {
        console.error('Error in login: ', error);
        alert('Erro ao tentar realizar o login.');
      }
    } else {
      alert('Usuário ou senha inválidos.');
    }
  };

  return (
    <LoginContainer>
      <LoginImage>
        <img src={imagem_login} alt="Imagem do login da ijmaki pixabay" />
      </LoginImage>

      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          value={username} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setUsername(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="Email" // Placeholder do campo de entrada
        />
        <Input
          type="password"
          value={password} // Valor do campo de entrada é ligado ao estado password
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Password" // Placeholder do campo de entrada
        />
        <Button type="submit">Login</Button> {/* Botão que envia o formulário */}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; // Exporta o componente Login como padrão
