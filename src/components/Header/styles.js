import styled from "styled-components";


export const Container = styled.header`
  width: 100%;
  height: 11.5rem;
  background-color: ${({ theme }) => theme.COLORS.BG_DARK_700};
  padding: 0 2.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const HeaderLogo = styled.a`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;

 
  > div {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
  }
`

export const Menu = styled.a`
  width: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

`

export const Orders = styled.a`
  height: 5rem;
  width: 5rem;
  
  position: relative;
  

  display: flex;
  justify-content: center;
  align-items: center;

  > div{
    width: 2rem;
    height: 2rem;
    padding: 1.1rem;
    font-size: 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    border-radius: 99%;

    left: 1.9rem;
    top: .1rem;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
  }

`