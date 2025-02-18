import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage() {
    return (
        <>
        <p>Edit Todo</p>
        
        <TodoForm 
        label='Edit your todo'
        submitText='Edit'
        submitEvent={() => console.log('llamar a editTodo')}
        />
        </>
    );
}

export { EditTodoPage }