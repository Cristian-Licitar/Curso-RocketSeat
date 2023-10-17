import { createGlobalStyle } from "styled-components";

//:root{} serve para criarmos variáveis globais para serem usadas em todo o codígo CSS
//como exemplo a variável --backgroud
export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429CC;
    --green: #33cc95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //É uma forma para adequar o tamanho da fonte, conforme o tamanho da tela do usuário
  html{
    @media (min-width: 1080px) {
        font-size: 93.75%;//15px
    }

    @media (min-width: 768px) {
        font-size: 87.5%;//14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  //tudo que estiver desabilitado terá essa configuração
  //opacity 1 deixa totalmente visível, o 0 totalmente invisível. Então 0.6 estaria 60% visivel
  //not-allowed é para quando o mouse estiver em cima de um elemento desabilitado, irá aparecer um símbolo de não permitido
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;