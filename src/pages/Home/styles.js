import styled from "styled-components";

export const Main = styled.main`
  margin-top: 1.5rem;
  margin-bottom: 6.2rem;

  .content {
    height: 15rem;
    position: relative;

    display: flex;

    img {
      position: absolute;
      width: 19.1rem;
    }

    .content-box {
      height: 12rem;

      background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
      border-radius: 0.3rem;

      position: absolute;
      left: 3rem;
      z-index: -1;
      bottom: 0;
      right: 1.6rem;

      padding: 3.6rem 2.2rem 2.1rem 15.3rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.3rem;

      > h4 {
        color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
      }
      > p {
        color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};
        font-size: 1.2rem;
        line-height: 140%;
      }
    }
  }
`;
