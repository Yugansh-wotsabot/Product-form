import React,{useState} from 'react'
import InvoiceForm from './components/InvoiceForm';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="app">
    <InvoiceForm/>
    {isModalOpen && (
      <div className="modal">
        <button onClick={closeModal}></button>
        <InvoiceForm closeModal={closeModal} />
      </div>
    )}
  </div>
);
};

export default App;