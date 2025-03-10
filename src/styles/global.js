import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        

    }

    :root{
        font-size: 62.5%;
    }


    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
        color: ${({theme}) => theme.COLORS.TEXT_COLOR_DARK};
        -webkit-font-smoothing: antialiased;
        
    }

    body, h2, button {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    label, input, footer, textarea, h1, a{
       font-family: 'Roboto', sans-serif;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a {
        text-decoration: none;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: none;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color:${({theme}) => theme.COLORS.LIGHT_BROWN};
  }
`;