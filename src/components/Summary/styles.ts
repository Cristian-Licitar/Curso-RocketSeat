import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);//criando 3 colunas de largura igual
    gap: 2rem;//da um espaço de 2rem entre as linhas e colunas do meu template grid
    margin-top: -10rem;//sobe além da margem(0) e entra dentro do componente que está acima

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;//usando porque por padrão o strong vem com display: inline;
            margin-top: 1rem;//usando o display: block é possível dar um margin-top
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`;