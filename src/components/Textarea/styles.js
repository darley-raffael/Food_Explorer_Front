import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.BG_WHITE_200};
`;

export const TextareaInput = styled.textarea`
  width: 100%;
  height: 17.2rem;
  resize: none;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
  padding: 1.4rem;
  background-color: ${({ theme }) => theme.COLORS.BG_DARK_800};

  border: none;

  border-radius: 8px;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_500};
    font-size: 1.6rem;
  }
  &:focus {
    outline-color: ${({ theme }) => theme.COLORS.BG_DARK_1000};
    caret-color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
  }
`;
