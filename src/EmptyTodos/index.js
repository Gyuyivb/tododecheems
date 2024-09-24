import React from "react";
import { TodoContext } from '../TodoContext';
import './EmptyTodos.css';

function EmptyTodos (){
    const {
        totalTodos,
      } = React.useContext(TodoContext)
    return (
        totalTodos === 0 ? 
        <p>Create your TODOs</p>
        :
        <p>TODO not found</p>
    );
}

export { EmptyTodos };