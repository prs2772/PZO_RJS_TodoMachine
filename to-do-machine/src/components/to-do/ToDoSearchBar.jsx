import React from "react";

const ToDoSearchBar = ({ state, setState }) => {
  const noTildes = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const lookForToDo = (evento) => {
    state.toDos.map(
      (arrElem, arrIndx) => {
        arrElem.numIndex = arrIndx + 1;
      }
    );

    setState({
        ...state,
        searchValue: evento.target.value,
        searchedToDos: state.toDos.filter(
          (element, elementIndx) => {
            
            let elemCompoundDescription = `${elementIndx + 1} - ${element.description}`;
            let elemFinal = noTildes(elemCompoundDescription.toLocaleUpperCase());
            let busquedaFinal = noTildes(evento.target.value.toLocaleUpperCase());

            return elemFinal.includes(busquedaFinal);
          }
        )
      }
    );
  }

  return (
    <>
      <input 
        placeholder="Buscar ToDo..." 
        className="todo-search-bar__bar" 
        value={state.searchValue}
        onChange={lookForToDo}>
      </input>
    </>
  );
}

export {ToDoSearchBar};
