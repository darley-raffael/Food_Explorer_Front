import styled from "styled-components";



export const MenuHeader = styled.header`
  width: 100%;
  height: 11.5rem;
  padding: 2.8rem;
  background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
  

  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-content: center;
    gap: 1.6rem;
  }

  > div a {
    display: grid;
    place-items: center;
  }

  > div span{
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};

  }

`

export const Main = styled.main`
  height: 100%;
  padding: 0;
  margin: 3.6rem 2.8rem 1.4rem 2.8rem ;

  display: grid;
  gap: 3.6rem;

  > ul {
    font-size: 2.4rem;
    font-weight: 300;

    li{
      padding: 1rem;
    }

    li a{
      color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};
    }
  }
 
`

export const Divider = styled.div`
  width: 100%;
  border-bottom: solid 1px ${({ theme }) => theme.COLORS.BG_DARK_1000};
`
