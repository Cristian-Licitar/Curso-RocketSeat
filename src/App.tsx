import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {//função para abrir o modal
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {//função para fechar o modal
    setIsNewTransactionModalOpen(false);
  } 

  return (
    <>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

//Com o export default eu posso importar colocando qualquer nome, por isso não é bom usar assim
//export default App;
