import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

interface Transaction {
    id: number,
    name: string,
    value: number,
    type: string,
    category: string,
    createdAt: string,
}

export function Transactions(){

    const [transactions, setTransactions] = useState<Transaction[]> ([]);

    useEffect(() => {
        //trocando o fetch pelo api, o service feito com axios
        //basta importar a api e usar o metódo que deseja, neste caso o GET
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))//Mostro no console os dados tranformados em JSON de forma automática pelo AXIOS
        //para mostrar somente o objeto que está sendo enviado, uso response.data
        //usando só response, iria mostrar as outras configurações da requisição
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                   {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td> {transaction.name} </td>
                                <td className={transaction.type}> {transaction.value} </td>
                                <td> {transaction.category} </td>
                                <td> {transaction.createdAt} </td>
                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
        </Container>
    )
}