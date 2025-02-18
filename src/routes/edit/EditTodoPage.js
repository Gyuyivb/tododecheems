import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useParams } from "react-router-dom";

function EditTodoPage() {
    const params=useParams();
    const id = Number(params.id);
    const {editTodo}=useTodos();
    return (
        <>
        <p>Edit Todo</p>
        
        <TodoForm 
        label='Edit your todo'
        submitText='Edit'
        submitEvent={(newText) => editTodo(id, newText)}
        />
        </>
    );
}

export { EditTodoPage }