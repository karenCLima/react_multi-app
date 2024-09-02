import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../imagens/imagem_login.png'

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:14%;
  height: 100vh;
  background-color: var(--primary-color);
`;

//Define o estilo do cointainer da imagem 
const Image = styled.div`
  width:60%;
  img{
    width:100%;
    height: 80%;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--terciary-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
    color:grey;
  }
`;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, email, password }; //Cria um novo usuário

    // Salva os dados do usuário em localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Usuário cadastrado com sucesso!');
    //limpa os inputs
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <SignUpContainer>
      <Image>
      <img src={image} alt="Imagem do Signup da ijmaki pixabay" />
      </Image>
      <SignUpForm onSubmit={handleSubmit}>
        <h2>Cadastrar</h2>
        <Input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Cadastrar</Button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
