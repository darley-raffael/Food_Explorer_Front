import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  .ingredients-tags {
    width: 100%;
    height: 4.8rem;
    display: inline-flex;
    padding: 0.8rem;
    align-items: center;
    gap: 1.6rem;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_800};
  }

  .btn-list {
    width: 100%;
    display: flex;

    gap: 3.2rem;

    > button {
      font-size: 1.1rem;
    }
  }
`;

export const Content = styled.main`
  margin: 11px 32px 179px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.4rem;
  gap: 2.4rem;

  > header {
    h2 {
      font-size: 3.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
    }
  }

  .input-image {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;

    padding: 1.2rem 3.2rem;
    gap: 0.8rem;
  }

  input[type="file"] {
    display: none;
  }
`;

export const SectionInput = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    column-gap: 3.2rem;
  }

  .title-section {
    font-size: 1.6rem;
  }
`;

export const InputType = styled.input`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.BG_DARK_800};
  padding: 1.6rem;
  border: none;
  border-radius: 8px;
  font-size: 1.6rem;

  &:focus {
    outline-color: ${({ theme }) => theme.COLORS.BG_DARK_1000};
    caret-color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
  }
`;
export const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;

  .icon-down {
    position: absolute;
    right: 1.6rem;
    top: 1.2rem;
    bottom: 1.2rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.BG_DARK_900};
  border: none;
  padding: 1.6rem;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.BG_LIGHT_400};

  align-self: stretch;
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
