import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {

  const currentTasks = useState([])

  return (
    <TaskContext.Provider value={ currentTasks }>
      {children}
    </TaskContext.Provider>
  );
}

