import styled from "styled-components";

export const Container = styled.a`
  color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};
  font-weight: 500;

  display: flex;
  justify-content: baseline;
  align-items: center;

  > img {
    /* padding: 0.5rem 1rem; */
    > svg {
      height: 72px;
      width: 72px;
    }
  }

  span {
    font-size: ${({ fontSize }) => fontSize || "2.4rem"};
  }
`;
