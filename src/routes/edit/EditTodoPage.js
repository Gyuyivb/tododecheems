import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useParams } from "react-router-dom";

function EditTodoPage() {
    const params=useParams();
    const id = Number(params.id);
    const {
        editTodo,
        loading,
        getTodo
    }=useTodos();

    if (loading) {
        return <p>Cargando</p>
        
    }else {
        //aqui se crea un objeto que consigue el texto del todo con getTodo
        const todo = getTodo(id)
        console.log({ todo });
        
        return (
            <>
            <p>Edit Todo</p>
            
            <TodoForm 
            label='Edit your todo'
            deafautlTodoText={todo.text}
            submitText='Edit'
            submitEvent={(newText) => editTodo(id, newText)}
            />
            </>
        );
    }
}

export { EditTodoPage }