
import styled from 'styled-components';
// Cria um componente estilizado chamado Question usando styled-components.
// Esse componente estiliza um <p> para exibir a pergunta com cor, tamanho da fonte e margem.
const Question = styled.p`
  color: #555; // Define a cor do texto como um tom médio de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo da pergunta.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado OptionButton usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas, e efeitos de transição.
const OptionButton = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: var(--secondary-color); // Define a cor de fundo como azul.
  color: grey; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  margin: 10px; // Adiciona uma margem de 10px ao redor do botão.
  transition: background-color 0.3s, transform 0.3s; // Adiciona uma transição suave para a cor de fundo e transformação.

  &:hover { // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: var(--primary-color); // Muda a cor de fundo para um tom mais escuro de azul.
    transform: scale(1.05); // Aumenta levemente o tamanho do botão.
  }

  &:active { // Aplica estilos ao botão quando ele é clicado.
    background-color: var(--primary-color); // Muda a cor de fundo para um tom ainda mais escuro de azul.
    transform: scale(0.95); // Reduz levemente o tamanho do botão.
  }
`;

// Cria um componente estilizado chamado Score usando styled-components.
// Esse componente estiliza um <p> para exibir a pontuação com cor, tamanho da fonte e margem.
const Score = styled.p`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-top: 20px; // Adiciona uma margem de 20px acima da pontuação.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;


const TriviaDisplay = ({trivia, handleAnswer,score})=>{

    if (!trivia) return null;

    function sortAnswer(trivia){
        // Combine incorrect_answers (array) com correct_answer (string transformada em array)
        let answers = trivia.incorrect_answers.concat([trivia.correct_answer]);
        // Embaralha as respostas
        return answers.sort(() => Math.random() - 0.5);
    }

    return(
        <>
            <Question>{trivia.question}</Question>
            {sortAnswer(trivia).map((option)=>(
                <OptionButton key={option} onClick={() => handleAnswer(option, trivia)}>{option}</OptionButton>
            ))}
            <Score>Your score: {score}</Score>
        </>
    )
}

export default TriviaDisplay