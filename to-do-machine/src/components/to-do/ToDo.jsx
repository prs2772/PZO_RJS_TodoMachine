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
      { description: `Create GitHub account`, isCompleted: false, numIndex: 0 },
      { description: `Make first commit`, isCompleted: false, numIndex: 0 },
      { description: `Finish ToDo project`, isCompleted: false, numIndex: 0 },
      { description: `Connect to an external API`, isCompleted: false, numIndex: 0 },
      { description: `Lalaland á`, isCompleted: true, numIndex: 0 },
    ],
    searchedToDos: [],
  });
  
  console.log(`Se ha escrito: ${state.searchValue}, ${state.searchedToDos}`);

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
            {
              state.searchedToDos.map((toDoElem, arrIndex) => {
                return(
                  <ToDoItem key={ `to-do-item-${arrIndex}` } toDoElement={ toDoElem } />
                );
              })
            }
          </ToDoList>
          <ToDoAdd />
        </div>
      </div>
    </>
  );
}

export { ToDo };
