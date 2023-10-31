import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number,
    name: string,
    value: number,
    type: string,
    category: string,
    createdAt: string,
}

interface TransactionsProviderProps {
    children: ReactNode;//aceita qualquer tipo de conteúdo válido para o REACT(TAG JSX, HTML, TEXTO)
}

interface TransactionContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

//Passo primeiro o objeto ou propriedade, depois as variáveis dele que quero omitir
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

//Nesse é o contrário, passo os valores que quero manter
//type TransactionInput = Pick<Transaction, 'name' | 'value' | 'type' | 'category'>;

const TransactionsContext = createContext<TransactionContextData>( {} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps ){

    const [transactions, setTransactions] = useState<Transaction[]> ([]);
    
    useEffect(() => {
        //trocando o fetch pelo api, o service feito com axios
        //basta importar a api e usar o metódo que deseja, neste caso o GET
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
        //para mostrar somente o array que está sendo recebido, uso response.data.transactions
        //usando só response.data, iria mostrar as outras configurações da requisição
    }, []);

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date('pt-BR')});
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    
    return context;
}