import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: .8rem;
    font-weight: 400;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.BG_LIGHT_400};


    >input{
        height: 4.8rem;
        padding: 1.2rem 1.4rem;
        color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.BG_DARK_900};
        border-radius: .8rem;
        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.BG_LIGHT_500};
            font-size: 1.6rem;
        }
    }


`