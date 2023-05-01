import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   body{
        background-color: ${({ theme }) => theme.COLORS.BG_DARK_400};
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.BG_LIGHT_400};
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
    }
    
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.BG_LIGHT_100};
        width: 100%;
        text-align: center;
    }

    ul{
        list-style: none;
    }
    
    // Estilos button
    button{
        border: none;
    }
    .bg-tomato-100{
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    }
    .bg-tomato-200{
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
    }
    .bg-tomato-400{
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    }

    button, a{
        cursor: pointer;
        transition: filter(.2s);
    }

    button:hover, a:hover{
        filter: brightness(.9);
    }

    legend, button, a, h3{
        font-family: "Poppins", sans-serif;
    }
`