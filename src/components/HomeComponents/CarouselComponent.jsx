import { useAccess } from "../../context/AccessContext";
import CarouselItem from "./CarouselItem";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";


// Estiliza o carrossel personalizado.
const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

const CarouselComponent = ({selectedItem, onChange}) => {

    const { handleAccess } = useAccess();

    return (
        <>
            <CustomCarousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                selectedItem={selectedItem}
                onChange={onChange}
            >
                <CarouselItem itemName="QR Code Generator" onClikHandle={() => handleAccess(0, "QRCodeGenerator")} />

                <CarouselItem itemName="IP Address Finder" onClikHandle={() => handleAccess(1, "IPAddressFinder")} />
                
                <CarouselItem itemName="Movie Search Engine" onClikHandle={() => handleAccess(2, "MovieSearchEngine")} />
                
                <CarouselItem itemName="Todo App" onClikHandle={() => handleAccess(3, "TodoApp")} />
                
                <CarouselItem itemName="Quiz App" onClikHandle={() => handleAccess(4, "QuizApp")} />
                
                <CarouselItem itemName="Language Translator" onClikHandle={() => handleAccess(5, "LanguageTranslator")} />
                
            </CustomCarousel>
        </>
    )
}

export default CarouselComponent