import React from "react";

const ToDoList = ({ children }) => {
  return(
    <div className="todo-list">
      <ul>
        {children}
      </ul>
    </div>
  );
}

export {ToDoList};
