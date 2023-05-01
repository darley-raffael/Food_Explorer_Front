import styled from "styled-components";


export const Container = styled.footer`
  width: 100%;
  padding: 3.1rem 3rem;
  font-size: 1.2rem;
  color:  ${({ theme }) => theme.COLORS.BG_LIGHT_200};
  background-color: ${({ theme }) => theme.COLORS.BG_DARK_600};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 0;
  
  > div{

    display: flex;
    align-items: center;
    gap: .6rem;

    > p {
      font-weight: 700;
      opacity: .5;
    }
  }
`