import { createGlobalStyle } from 'styled-components';
import "typeface-roboto";

export default createGlobalStyle`
 @import url("https://use.typekit.net/wzg2hje.css");
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

  html, body, #root {
    min-height: 100%;
    overflow: hidden;
  }

  body {
    background: '#F2F2F2';
;
    -webkit-font-smoothing: antialiased !important;

    /* Customizando o layout da barra de scroll */

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F2F2F2;
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
        background-color: #F2F2F2;
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #555;
        border-radius: 10px;
    }
  }

  button {
    cursor:pointer;
  }

  :root {
    --form-control-color: rebeccapurple;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  iframe{
    display: none !important;
  }
`;
