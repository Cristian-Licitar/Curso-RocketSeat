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

  .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;//ocupa a tela toda
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
  }

    .react-modal-content {
      width: 100%;//ocupar 100% do espaço em caso de tela menor que o max-width
      max-width: 576px;//o tamanho máximo que ele pode chegar
      background: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;

    }

    .react-modal-close {
      //é preciso deixar o display flex para surtir efeito
      position: absolute;//ele flutua e os outros componentes não precisam se ajustar para acomodar ele
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;//tirandoa cor de fundo

      transition: filter(0.2s);

      &:hover {
        filter: brightness(0.8);
      }
    }

`;