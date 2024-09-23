import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    totalTodos, 
    completedTodos} = React.useContext(TodoContext);

    return(
      totalTodos === 0 ? 
      <h1 className='TodoCounter'>No hay TODOS que completar</h1> 
      :completedTodos === totalTodos ? 
      <h1 className='TodoCounter'>You have completed all your TODOS </h1> 
      :
      <h1 className="TodoCounter">
        You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOS
      </h1>
    );
  }

  export {TodoCounter}