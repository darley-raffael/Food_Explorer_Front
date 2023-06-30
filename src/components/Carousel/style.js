import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 2.4rem;
  padding-inline: 2.4rem;

  > h2 {
    font-size: clamp(1.8rem, 1rem + 2vw, 3.2rem);
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};
    font-weight: 500;
    line-height: 140%;
  }
`;
export const GalleryWrapper = styled.div`
  position: relative;

  border: none;

  .arrow-right {
    top: 0;
    left: auto;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, transparent 0%, black 200%);
    justify-content: flex-end;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  z-index: 5;
  height: 100%;
  width: 12rem;
  border: none;

  top: 0;
  bottom: 0;
  right: auto;
  left: 0;

  display: none;

  background: linear-gradient(to left, transparent 0%, black 300%);

  color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    opacity: 0;

    transition: all 600ms ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;
export const Gallery = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;
