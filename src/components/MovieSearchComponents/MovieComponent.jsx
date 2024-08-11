import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import MovieCard from './MovieCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: var(--terciary-color);
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 1000px;
  max-height:80%;
  margin: 50px auto;
`;

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

// Define o estilo do container dos filmes
const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 500px; /* Ajuste a altura máxima conforme necessário */
  overflow-y: auto; /* Adiciona rolagem vertical se necessário */
  width: 100%;
`;

//Define o estilo da mensagem de erro
const ErrorMessage = styled.p`
    color: red;
    font-size: 20px;
`

const MovieComponent = () =>{

    const [query, setQuery] = useState(''); // Define o estado para a consulta de busca
    const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
    const [errors, setErrors] = useState({}); // Declara um estado errors para armazenar mensagens de erro

    //Função que valida se existe erro
    const validate = ()=>{
        const newErrors = {}; //Objeto para armazenar novos erros

        if(!query){
            newErrors.query = "It is mandatory to insert a film "
        } //Se query vazia retorna erro

        return newErrors;//retorna objeto de novos erros
    }

    // Função para buscar filmes
    const searchMovies = async () => {

        const validationErros = validate(); //chama a função validate para validar o input
        // Verifica se não há erros de validação
        if(Object.keys(validationErros).length === 0){
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=61a7a03476afe45fe482e9c81ef5997f&query=${query}&language=pt-BR`); // Faz uma requisição GET para a API OMDB
                setMovies(response.data.results); // Armazena os dados dos filmes no estado movies
            } catch (error) {
                console.error("Error fetching movie data:", error); // Exibe um erro no console em caso de falha
                alert("Sorry! Error fetching movie data. Pleasy Try again")// Exibe um erro para o usuário em caso de falha
            }

            setErrors({})//limpam os erros, caso existam
        }else{
            // Define os erros de validação no estado errors
            setErrors(validationErros)
        }
        
    };


    return(
        <Container>
        <Title>Movie Search Engine</Title>
        <Input
            type="text"
            value={query} // Valor do campo de entrada é ligado ao estado query
            name="query"
            onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
            placeholder="Search for a movie" // Placeholder do campo de entrada
        />
        {/* Exibe a mensagem de erro se houver erro no campo 'query' */}
        {errors.query && <ErrorMessage>{errors.query}</ErrorMessage>}
        <Button onClick={searchMovies}>Search</Button> {/* Botão que chama a função searchMovies quando clicado */}
        <MoviesContainer>
            {movies && movies.map((movie) => ( // Verifica se há filmes e os mapeia para exibir MovieCard
            <MovieCard key={movie.id} movie={movie}/>
            ))}
        </MoviesContainer>
        </Container>
    )
}

export default MovieComponent