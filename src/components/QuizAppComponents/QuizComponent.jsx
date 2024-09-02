// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useEffect, useState } from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados.
import styled from 'styled-components';
import axios from 'axios';
import TriviaDisplay from './TriviaDisplay';


// Cria um componente estilizado chamado Title usando styled-components.
// Esse componente estiliza um <h2> com cor, margem, tamanho da fonte e alinhamento.
const Title = styled.h2`
  color: black; // Define a cor do texto como um tom escuro de cinza.
  margin-bottom: 5px; // Adiciona uma margem de 20px abaixo do título.
  font-size: 24px; // Define o tamanho da fonte como 24px.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

const Paragraph = styled.p`
  position: relative;
  right:-135px;
  top:-104px;
  color:black;
  font-size: 16px;
`

const QuizComponent = () => {

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [trivias, setTrivias] = useState([])

    useEffect(() => {

        const QuizApi = async () => {
            try {
                const response = await axios.get('https://tryvia.ptr.red/api.php?amount=10');
                setTrivias(response.data.results); // Armazena o texto traduzido no estado translatedText
                console.log(response.data.results)
            } catch (error) {
                console.error("Error translating text:", error); // Exibe um erro no console em caso de falha
                alert("Sorry! Error translating text. Try again!")
            }
        };

        QuizApi()

    }, [])

    // Função que é chamada quando o usuário responde uma pergunta.
    const handleAnswer = (answer) => {
        // Verifica se a resposta fornecida está correta.
        if (answer === trivias[currentQuestion].correct_answer) {
            setScore(score + 1); // Se a resposta estiver correta, aumenta a pontuação em 1.
        }

        // Passa para a próxima pergunta se ainda houver perguntas disponíveis.
        if (currentQuestion < trivias.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    if (trivias.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Title>Quiz App</Title>{/* Exibe o título do aplicativo de quiz */}
            <Paragraph>{currentQuestion + 1}/10</Paragraph>
            {currentQuestion < trivias.length - 1 ?
                (<TriviaDisplay trivia={trivias[currentQuestion]} handleAnswer={handleAnswer} score={score} />)
                : (<div>
                    <p>Quiz completed! Your score is {score + 1}/{trivias.length}`</p>
                </div>)}
        </>
    )
}

export default QuizComponent