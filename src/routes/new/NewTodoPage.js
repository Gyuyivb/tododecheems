import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
    return (
        <>
        <p>New Todo</p>
        
        <TodoForm 
        label='Escribe tu nuevo todo'
        submitText='Add'
        submitEvent={() => console.log('llamar a add todo')}
        />
        </>
    );
}

export { NewTodoPage }