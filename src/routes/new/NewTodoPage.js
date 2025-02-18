import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
    const { addTodo }=useTodos();
    return (
        <>
        <p>New Todo</p>
        
        <TodoForm 
        label='Write your new todo'
        submitText='Add'
        submitEvent={(text) => addTodo(text)}
        />
        </>
    );
}

export { NewTodoPage }