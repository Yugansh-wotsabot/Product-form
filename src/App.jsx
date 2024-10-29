import React,{useState} from 'react'
import ProductForm from './components/ProductForm';

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
    <ProductForm/>
    {isModalOpen && (
      <div className="modal">
        <button onClick={closeModal}></button>
        <ProductForm closeModal={closeModal} />
      </div>
    )}
  </div>
);
};

export default App;
