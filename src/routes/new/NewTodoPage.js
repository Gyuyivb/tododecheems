import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
    return (
        <>
        <p>New Todo</p>
        
        <TodoForm 
        label='Write your new todo'
        submitText='Add'
        submitEvent={() => console.log('llamar a addTodo')}
        />
        </>
    );
}

export { NewTodoPage }