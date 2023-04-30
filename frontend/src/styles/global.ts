import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url("https://use.typekit.net/wzg2hje.css");
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: poppins, sans-serif;
  }

  html, body, #root {
    min-height: 100%;
    overflow: hidden;
  }

  body {
    background: #FAFAFA;
;
    -webkit-font-smoothing: antialiased !important;

    /* Customizando o layout da barra de scroll */

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F5F5F5;
        border-radius: 10px;
    }

    ::-webkit-scrollbar {
        background-color: #F5F5F5;
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

  .form-control {
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
  }

  input[type="radio"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: #00A3FF;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid #00A3FF;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #00A3FF;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }

  .form-control + .form-control {
    margin-top: 1em;
  }

  iframe{
    display: none !important;
  }
`;
