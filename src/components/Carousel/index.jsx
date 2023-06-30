import { useRef } from "react";
import { Card } from "../Card";
import { Container, ArrowButton, Gallery, GalleryWrapper } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Carousel() {
  const carousel = useRef(null);

  function handleLeftClick(e) {
    e.preventDefault();

    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  }

  function handleRightClick(e) {
    e.preventDefault();

    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  }

  return (
    <Container>
      <h2>Pratos Principais</h2>

      <GalleryWrapper>
        <ArrowButton className="arrow-left" onClick={handleLeftClick}>
          <FiChevronLeft size={50} />
        </ArrowButton>
        <Gallery ref={carousel}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Gallery>
        <ArrowButton className="arrow-right" onClick={handleRightClick}>
          <FiChevronRight size={50} />
        </ArrowButton>
      </GalleryWrapper>
    </Container>
  );
}
