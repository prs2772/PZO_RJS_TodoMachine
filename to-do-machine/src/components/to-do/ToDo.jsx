import React from "react";
import { ToDoCounter } from "./ToDoCounter.jsx";
import { ToDoList } from "./ToDoList.jsx";
import { ToDoItem } from "./ToDoItem";
import { ToDoSearchBar } from "./ToDoSearchBar.jsx";
import { ToDoAdd } from "./ToDoAdd.jsx";

const ToDo = ({ arrToDos }) => {
  return(
    <>
      <div className="todo-component__content-container">
        <div className="todo-component__content-background">    
          <ToDoCounter numCompleted={3} numTotal={33}/>
          <ToDoSearchBar />
          <ToDoList>
            {arrToDos.map((toDoElem, arrIndex) => {
              return(
              <div>
                <ToDoItem key={ `to-do-Item${arrIndex}` } toDoElement={ toDoElem } />
              </div>
            );
            })}
          </ToDoList>
          <ToDoAdd />
        </div>
      </div>
    </>
  );
}

export { ToDo };
