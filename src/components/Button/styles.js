import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 3.2rem;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

    color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
    font-weight: 500;
    font-size: 1.4rem;

    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
`
