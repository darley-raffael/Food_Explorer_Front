import styled from "styled-components";


export const Container = styled.div.attrs(props => ({
  justify: props.justify || null,
  size: props.size || "4.3rem",
  fontSize: props.fontSize || "clamp(2.1rem, 8vw + 1rem, 4.8rem)",
  gap: props.gap || "1.54rem",
}))`
  width: 100%;
  font-size: 2.4rem;

  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;


  gap: ${props => props.gap};

  >span{
    font-size: ${props => props.fontSize};
    padding: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
    white-space: nowrap;
  }

  >img {
    width: ${props => props.size};
  }
`

