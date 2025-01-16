import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        item: todos, 
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;

    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) =>{
            const todoText = todo.text.toLowerCase();
            const seachText = searchValue.toLowerCase();
            return todoText.includes(seachText);
        }
    );

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    };
    
    const completeTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }
    const deleteTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);   
        saveTodos(newTodos);
    }


    return {         
        loading,
        error,
        completeTodo,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completedTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
        sincronizeTodos,
    };
}
  //el estado se consume y se actualiza pero
  //State, el estado, no se puede cambiar, es inmutable
  //el segundo elemento que recibe este array en particular lo setea (si es state, el otro es setState con camelCase,) el setter es un actualizador del estado
  //el primer estado, valor inicial, de este caso en especifico es estar vacio

export { useTodos };