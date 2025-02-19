import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
    const location = useLocation();
    const params=useParams();
    const id = Number(params.id);
    const {
        editTodo,
        loading,
        getTodo
    }=useTodos();

    let todoText;
    if (location.state?.todo) {
        todoText = location.state.todo.text
    }else if (loading) {
        return <p>Cargando</p>
        
    }else {
        //aqui se crea un objeto que consigue el texto del todo con getTodo
        const todo = getTodo(id)
        todoText = todo.text
        console.log({ todo }); 
    }
    return (
        <>
        <p>Edit Todo</p>
        
        <TodoForm 
        label='Edit your todo'
        deafautlTodoText={todoText}
        submitText='Edit'
        submitEvent={(newText) => editTodo(id, newText)}
        />
        </>
    );
}

export { EditTodoPage }