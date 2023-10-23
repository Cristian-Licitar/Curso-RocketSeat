import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/fechar.svg";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saídas.svg";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen,  onRequestClose}: NewTransactionModalProps){
  
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
            <Container>
                <h2> Cadastrar transação </h2>
                <input placeholder="Nome" />  
                <input placeholder="Valor" type="number"/> 

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder="Categoria" />  
                <button type="submit"> Cadastrar </button>
            </Container>
        </Modal>
    )
}