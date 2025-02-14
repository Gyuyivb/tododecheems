import React from 'react';
import './TodoCounter.css';

function TodoCounter( { totalTodos, completedTodos, loading }) {


    return(
      totalTodos === 0 ? 
      <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>There is no TODOs</h1> 
      :completedTodos === totalTodos ? 
      <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>You have completed all your TODOS </h1> 
      :
      <h1 className="TodoCounter">
        You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODOS
      </h1>
    );
  }

  export {TodoCounter}