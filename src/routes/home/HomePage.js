import React from 'react';
import { useTodos } from '../useTodos';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { Modal } from '../../ui/Modal';
import { TodoForm } from '../../ui/TodoForm';
import { ChangeAlert } from '../../ui/ChangeAlert';

function HomePage() {
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
    addTodo,
    setOpenModal,
    sincronizeTodos,
  } = useTodos();
  
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos} 
        />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        
      </TodoHeader>
      
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>There are no results for {searchText}</p>}
      >
        {//Render function
        todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onEdit={() => console.log('editandooo')}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {openModal && (
        <Modal>
        <TodoForm
        addTodo={addTodo}
        setOpenModal={setOpenModal}/> 
      </Modal>
      )}
      <CreateTodoButton 
      openModal={openModal}
      setOpenModal={setOpenModal}/>
      
      <ChangeAlert 
      sincronize={sincronizeTodos}/>
    </>
  );
}

export { HomePage };
