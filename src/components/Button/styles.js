import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 3.2rem;
    border-radius: .5rem;

    color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
    font-weight: 500;
    font-size: 1.4rem;

		display: flex;
		justify-content: center;
		align-items: center;

		gap: .6rem;

    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
`

export const Icon = styled.img`
	width: 2rem;
`
