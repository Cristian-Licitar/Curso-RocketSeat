import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;//o primeiro valor é da vertical e o segundo da horizontal
            text-align: left;
            line-height: 1.5rem;//altura do texto dentro da linha
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);//utilizando as variáveis que criei no meu global.ts
            font-weight: 400;
            color: var(--text-body);//utilizando as variáveis que criei no meu global.ts
            border-radius: 0.25rem;

            //o primeiro TD de cada linha(TR) terá essa configuração
            &:first-child {
                color: var(--text-title);
            }

            //o componente que tiver a classe deposit terá essa configuração
            &.deposit {
                color: var(--green);
            }

            //o componente que tiver a classe withdraw terá essa configuração
            &.withdraw {
                color: var(--red);
            }
        }
    }
`;