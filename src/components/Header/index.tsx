import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';


export function Header(){
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){//função para abrir o modal
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){//função para fechar o modal
        setIsNewTransactionModalOpen(false);
    }

    Modal.setAppElement('#root');

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}> Nova transação</button>

                <Modal 
                 isOpen={isNewTransactionModalOpen}
                 onRequestClose={handleCloseNewTransactionModal}>
                    <h2> Cadastrar transação </h2>
                </Modal>
            </Content>
        </Container>
    )
}