import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import SelectLanguage from './SelectLanguage';
import { useAuth } from '../../context/AuthProvider'

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
  max-width: 900px;
  margin: 0 auto;
  z-index:1;
`;

// Define o estilo do título
const Title = styled.h2`
  color: black;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Define o estilo do label
const Label = styled.label`
  color: black;
  font-size: 16px;
  margin-right: 10px;
`;

// Define o estilo do select
const SelectContainer = styled.div`
  margin-bottom: 20px;
  display:flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 20px;
  font-size: 16px;
  transition: border-color 0.3s;


`;

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
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
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--primary-color);
  }
`;

// Define o estilo do texto traduzido
const TranslatedText = styled.p`
  color: #333;
  font-size: 18px;
  background: var(--primary-color);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

//Cria as opções disponíveis para o select
const options = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
];

// Estilos customizados para o Select do react-select
const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '20px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'var(--terciary-color)',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'var(--primary-color)' // Cor de fundo da option selecionada
      : state.isFocused
      ? 'var(--terciary-color)' // Cor de fundo ao passar o mouse (hover)
      : '#fff', // Cor de fundo padrão
    color: state.isSelected ? 'grey' : 'black', // Cor do texto
    padding: 10,
    borderRadius: '20px'
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '20px',
  }),
};

// Componente principal LanguageTranslator
const LanguageTranslatorComponent = ()=>{
    const [text, setText] = useState(''); // Define o estado para o texto a ser traduzido
    const [translatedText, setTranslatedText] = useState(''); // Define o estado para o texto traduzido
    const [sourceLang, setSourceLang] = useState('en'); // Define o estado para a língua de origem
    const [targetLang, setTargetLang] = useState('es'); // Define o estado para a língua de destino
    const { token } = useAuth();

  // Função para traduzir o texto
  const translateText = async () => {
    try {
      const response = await axios.get('/api/get', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        },
        params: {
          q: text, // Texto a ser traduzido
          langpair: `${sourceLang}|${targetLang}`, // Par de línguas para tradução
        },
      });
      setTranslatedText(response.data.responseData.translatedText); // Armazena o texto traduzido no estado translatedText
    } catch (error) {
      console.error("Error translating text:", error); // Exibe um erro no console em caso de falha
      alert("Sorry! Error translating text. Try again!")
    }
  };

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <SelectContainer>
            <Label>Source Language:</Label>
            <SelectLanguage language={sourceLang} setLanguage={setSourceLang} />
        </SelectContainer>
        
      </div>
      <div>
        <SelectContainer>
            <Label>Target Language:</Label>
            <SelectLanguage language={targetLang} setLanguage={setTargetLang}
            />
        </SelectContainer>
      </div>
      <Input
        type="text"
        value={text} // Valor do campo de entrada é ligado ao estado text
        onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
        placeholder="Enter text to translate" // Placeholder do campo de entrada
      />
      <Button onClick={translateText}>Translate</Button> {/* Botão que chama a função translateText quando clicado */}
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>} {/* Condicional que exibe o texto traduzido se translatedText não for vazio */}
    </Container>
  );
}

export default LanguageTranslatorComponent