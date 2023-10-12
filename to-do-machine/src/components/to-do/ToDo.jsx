import React from "react";
import { ToDoCounter } from "./ToDoCounter.jsx";
import { ToDoList } from "./ToDoList.jsx";
import { ToDoItem } from "./ToDoItem";
import { ToDoSearchBar } from "./ToDoSearchBar.jsx";
import { ToDoAdd } from "./ToDoAdd.jsx";

const ToDo = () => {
  const [state, setState] = React.useState({
    searchValue: '',
    toDos: [
      { description: `Create GitHub account`, isCompleted: true },
      { description: `Make first commit`, isCompleted: true },
      { description: `Finish ToDo project`, isCompleted: false },
      { description: `Connect to an external API`, isCompleted: true },
      { description: `Lalaland`, isCompleted: true },
    ]
  });
  
  console.log(`(${state.prueba})Se ha escrito: ${state.searchValue}`);

  return(
    <>
      <div className="todo-component__content-container">
        <div className="todo-component__content-background">    
          <ToDoCounter 
            numCompleted={state.toDos.filter(toDo => toDo.isCompleted === true).length} 
            numTotal={state.toDos.length}/>
          <ToDoSearchBar 
            state={state}
            setState={setState}
          />
          <ToDoList>
            {state.toDos.map((toDoElem, arrIndex) => {
              return(
                <ToDoItem key={ `to-do-item-${arrIndex}` } toDoElement={ toDoElem } />
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
