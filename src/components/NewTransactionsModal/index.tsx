import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/fechar.svg";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saídas.svg";
import {FormEvent, useState} from "react";
import { useTransactions } from "../../hooks/UseTransactionsContext";


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen,  onRequestClose}: NewTransactionModalProps){

    const [type, setType] = useState('deposit');
    const [name, setName] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const { createTransaction } = useTransactions();
    
    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();//faz com que a página não seja recarregada ao submeter o formulário
        await createTransaction({
            name,
            value,
            category,
            type,
        });

        setType('');
        setName('');
        setValue(0);
        setCategory('');
        onRequestClose();
    }
  
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" className="react-modal-close" onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2> Cadastrar transação </h2>
                <input onChange={event => setName(event.target.value)} value={name}  placeholder="Nome" />  
                <input onChange={event => setValue(event.target.valueAsNumber)} value={ isNaN(value) ? '' : value } placeholder="Valor" type="number"/> 

                <TransactionTypeContainer>
                    <RadioBox type="button" 
                        onClick={() => {setType('deposit')}} 
                        isactive={type === 'deposit' ? true : false}
                        activecolor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type="button" 
                        onClick={() => {setType('withdraw')}} 
                        isactive={type === 'withdraw' ? true : false}
                        activecolor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input onChange={event => setCategory(event.target.value)} value={category} placeholder="Categoria" /> 

                <button type="submit"> Cadastrar </button>
            </Container>
        </Modal>
    )
}