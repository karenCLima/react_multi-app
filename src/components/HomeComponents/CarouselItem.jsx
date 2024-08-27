import styled from "styled-components";

const CarouselItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: grey;
  }

  button {
    padding: 10px 20px;
    background-color: var(--quaternary-color);
    color: grey;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;

    &:hover {
      background-color: var(--terciary-color);
      color:white;
    }
  }
`;

const CarouselItem = ({itemName, onClikHandle}) => {
    
    return (
        <CarouselItemStyled>
            <h2>{itemName}</h2>
            <button onClick={onClikHandle}>
                Acessar
            </button>
        </CarouselItemStyled>
    )
}

export default CarouselItem