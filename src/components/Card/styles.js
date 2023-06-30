import styled from "styled-components";

export const Container = styled.div`
  width: 24rem;
  padding: 2.4rem;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.BG_DARK_300};
  background-color: ${({ theme }) => theme.COLORS.BG_DARK_200};

  display: grid;
  gap: 1.2rem;
  place-items: center;

  position: relative;

  flex: none;

  > h2 {
    font-size: clamp(1.4rem, 1rem + 1vw, 3.2rem);
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};
    line-height: 24px;
    font-weight: 500;
    text-align: center;
  }

  > div {
    font-size: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    line-height: 100%;
  }

  .icon-favorite {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }
`;

export const ImageDish = styled.img`
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
`;

export const NavQuantity = styled.nav`
  width: 100%;

  display: grid;
  gap: 1.8rem;
  place-items: center;
`;
