import styled from "styled-components";


export const Container = styled.div`
  padding: .4rem .8rem;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 5px;
  line-height: 2.4rem;
  text-align: center;

  margin-right: .6rem;

  color:  ${({ theme }) => theme.COLORS.BG_LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.BG_DARK_1000};
`
