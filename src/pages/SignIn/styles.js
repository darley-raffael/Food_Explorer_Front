import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 15.8rem 5.5rem;

  @media (max-width: 768px) {
    .title-signin {
      display: none;
    }
  }

  @media (min-width: 768px) {
    padding: 10rem 13rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .title-signin {
      font-size: 3.2rem;
      width: 100%;
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  margin-top: 7.3rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 768px) {
    max-width: 48rem;
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
    padding: 6.4rem;
    border-radius: 16px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
`;
