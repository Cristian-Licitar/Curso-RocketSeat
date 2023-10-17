import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function Transactions(){

    useEffect(() => {
        //trocando o fetch pelo api, o service feito com axios
        //basta importar a api e usar o metódo que deseja, neste caso o GET
        api.get('/transactions')
        .then(response => console.log(response.data))//Mostro no console os dados tranformados em JSON de forma automática pelo AXIOS
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
                    <tr>
                        <td> Desenvolvimento de website </td>
                        <td className="deposit"> R$12000 </td>
                        <td> Desenvolvimento </td>
                        <td> 14/10/2023 </td>
                    </tr>
                    <tr>
                        <td> Aluguel </td>
                        <td className="withdraw">- R$700 </td>
                        <td> Casa </td>
                        <td> 10/10/2023 </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}