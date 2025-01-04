import React from "react";
import './EmptyTodos.css';

function EmptyTodos ({ totalTodos }){
    return (
        totalTodos === 0 ? 
        <p>Create your TODOs</p>
        :
        <p>TODO not found</p>
    );
}

export { EmptyTodos };