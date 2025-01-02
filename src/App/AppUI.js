import { TodoCounter } from '../TodoCounter';
import { TodoHeader } from '../TodoHeader';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoHeader>
        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}/>
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
      </TodoHeader>
      
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
        <TodoForm/> 
      </Modal>
      )}
      <CreateTodoButton />
      
    </>
  );
}

export { AppUI };