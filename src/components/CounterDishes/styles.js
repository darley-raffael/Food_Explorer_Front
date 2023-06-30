import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3.7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;

  > p {
    font-size: 2.2rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};
  }
`;

export const Counter = styled.button`
  background: transparent;

  display: flex;
  align-items: center;

  > img {
    width: 2.4rem;
  }
`;
