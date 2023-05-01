import styled from "styled-components";


export const Main = styled.main`
  height: 100%;
  padding: 0;

  margin: 1.6rem 5.6rem 3.2rem 5.6rem;
  
  display: grid;
  place-items: center;
  gap: 1.6rem;

  > a{
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_300};
    font-weight: 500;

    display: flex;
    justify-content: baseline;
    align-items: center;

    img{
     padding: .5rem 1rem;
    }

    span{
      font-size: 2.4rem;
    }
  }
`;


export const ImgDishe = styled.img`
  width: 26.4rem;
`

export const Content = styled.div`
  width: 100%;

  >section{

    display: grid;
    place-items: center;
    gap: 2.4rem;

    margin-bottom: 4.8rem;
    h3{
      font-size: 2.7rem;
      font-weight: 500;
    }
    p{
      font-weight: 400;
      line-height: 140%;
    }
    > h3, p{
      color:${({ theme }) => theme.COLORS.BG_LIGHT_300};
      text-align: center;
    }

    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;
      gap: 2.8rem;
    }
  }

`
export const OrderDishe = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`

