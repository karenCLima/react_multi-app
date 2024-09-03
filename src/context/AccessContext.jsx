import React, { createContext, useContext, useState } from 'react';

// 1. Crie o Contexto
const AccessContext = createContext();

// 2. Crie um Provedor de Contexto
const AccessProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  const handleAccess = (id, page) => {
    setSelectedId(id);
    setCurrentPage(page);
    // Outros efeitos colaterais
  };

  const changeIndex = (id)=>{
    setSelectedId(id)
  }

  

  return (
    <AccessContext.Provider value={{ selectedId, currentPage, handleAccess, changeIndex }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = ()=>{
  return useContext(AccessContext);
}

export default AccessProvider