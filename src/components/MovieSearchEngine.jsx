import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import { FaStar } from 'react-icons/fa'; // Importa o ícone de estrela

// Define o estilo do container principal
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
  border-radius: 5px;
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

// Define o estilo do cartão de filme
const MovieCard = styled.div`
  background: var(--primary-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 180px; /* Ajuste a largura conforme necessário */
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 10px;
    max-width: 90%; /* Ajusta o tamanho da imagem para caber dentro do cartão */
    height: auto;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
    color:grey;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

// Componente principal MovieSearchEngine
const MovieSearchEngine = () => {
  const [query, setQuery] = useState(''); // Define o estado para a consulta de busca
  const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes

  // Função para buscar filmes
  const searchMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=61a7a03476afe45fe482e9c81ef5997f&query=${query}&language=pt-BR`); // Faz uma requisição GET para a API OMDB
      setMovies(response.data.results); // Armazena os dados dos filmes no estado movies
      console.log(response.data.results)
    } catch (error) {
      console.error("Error fetching movie data:", error); // Exibe um erro no console em caso de falha
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const starRating = Math.round(rating / 2); // Converte de 0-10 para 0-5

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} color={i <= starRating ? "#ffc107" : "#e4e5e9"} /> // Estrela preenchida se i <= starRating
      );
    }
    return stars;
  };

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Search for a movie" // Placeholder do campo de entrada
      />
      <Button onClick={searchMovies}>Search</Button> {/* Botão que chama a função searchMovies quando clicado */}
      <MoviesContainer>
        {movies && movies.map((movie) => ( // Verifica se há filmes e os mapeia para exibir MovieCard
          <MovieCard key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} Poster`} /> {/* Exibe o pôster do filme */}
            <h3>{movie.title}</h3> {/* Exibe o título do filme */}
            <p>{movie.release_date.substring(0,4)}</p> {/* Exibe o ano do filme */}
            <div>{renderStars(movie.vote_average)}</div>
          </MovieCard>
        ))}
      </MoviesContainer>
    </Container>
  );
};

export default MovieSearchEngine; // Exporta o componente MovieSearchEngine como padrão
