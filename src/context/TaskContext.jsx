import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

  const currentTasks = useState([])

  const ModalValues = {
    isModalOpen: useState(true),
    modalType: useState('FormAddTask')
  }
  

  const TaskContextValues = {
    currentTasks, 
    ModalValues,
  }


  return (
    <TaskContext.Provider value={ TaskContextValues }>
      {children}
    </TaskContext.Provider>
  );
}

