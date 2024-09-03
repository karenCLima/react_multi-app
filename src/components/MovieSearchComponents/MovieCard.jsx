import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import { FaStar } from 'react-icons/fa'; // Importa o ícone de estrela

const MovieCardStyled = styled.div`
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
    color:black;
  }

  p {
    font-size: 14px;
    color: black;
  }
`;

const MovieCard = ({movie})=>{

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
  

    return(
        <MovieCardStyled>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} Poster`} /> {/* Exibe o pôster do filme */}
            <h3>{movie.title}</h3> {/* Exibe o título do filme */}
            <p>{movie.release_date.substring(0,4)}</p> {/* Exibe o ano do filme */}
            <div>{renderStars(movie.vote_average)}</div>
        </MovieCardStyled>
    )
}

export default MovieCard