import { Container } from "./styles";
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saídas.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/UseTransactionsContext";


export function Summary(){

    const { transactions } = useTransactions();
    
    //o primeiro parâmetro é o meu acumulador e é representado pelo parâmetro que vem depois da CallBack
    //O segundo é o objeto que está em cada poição do meu array
    const summary = transactions.reduce((acc, transaction) => { 
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.value;
            acc.total += transaction.value;
            return acc;//sempre é preciso retornar o acumulador
        }else {
            acc.withdraws += transaction.value;
            acc.total -= transaction.value;
            return acc;//sempre é preciso retornar o acumulador
        }
    }, {deposits: 0, withdraws: 0, total: 0});//posso passar tanto um objeto quanto 0 para representar o acumulador


    return (
        <Container>
            <div>
                <header>
                    <p> Entradas </p>
                    <img src={entradasImg} alt="Entradas"/>
                </header>
                <strong> 
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits) 
                    } 
                </strong>
            </div>
            <div>
                <header>
                    <p> Saídas </p>
                    <img src={saidasImg} alt="Saidas"/>
                </header>
                <strong> -
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws) 
                    } 
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p> Total </p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total) 
                    } 
                </strong>
            </div>
        </Container>
    );
}