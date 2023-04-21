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
    }
    button{
        border: none;
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