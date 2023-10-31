
import { darken, transparentize } from "polished";
import styled from "styled-components";


export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7;

        font-weight: 400px;
        font-size: 1rem;

        //mudando a cor do placeholder
        &::placeholder {
            color: var(--text-body);
        }

        //a partir do primeiro input, todos os outros terão o espaçamento do margin-top de 1rem
        & + input {
            margin-top: 1rem;
        }
    }
    
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);//cor de fundo verde
        margin-top: 1rem;
        color: #fff;//letra na cor branca
        border-radius: 0.35rem;//arredondando
        border: 0;//retirando a borda
        font-size: 1.3rem;//tamanho da fonte
        font-weight: 600;//espessura da fonte

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;//para o espaçamento entre os itens da div

`;

//criando propriedade para os botões.
interface RadioBoxProps{
    isactive: boolean;
    activecolor: 'green' | 'red';//defino que o activeColor só pode ser green ou red, retirando o erro do background no RadioBox abaixo
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background: ${(props) => props.isactive ? transparentize(0.9, colors[props.activecolor]) : 'transparent'};

        display: flex;
        align-items: center;//alinhamento vertical do itens centralizado
        justify-content: center;//alinhamento horizontal do itens centralizado

        transition: border-color 0.2s;

        &:hover {
            //o darken é uma função importada da biblioteca Polished, que realiza alterações nas cores
            border-color: ${darken(0.3, '#d7d7d7')};//escureço em 30% a cor passa entre aspas, como segundo paramêtro
        }

        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 0.5rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`;