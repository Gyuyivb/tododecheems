import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoHeader } from '../TodoHeader';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';

function App() {
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
  } = useTodos();
  
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
        //Render prop
        // render={todo => (
        //   <TodoItem 
        //     key={todo.text} 
        //     text={todo.text} 
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {//Render function
        todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
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
      
    </>
  );
}

export default App;
