import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  //el estado se consume y se actualiza pero
  //State, el estado, no se puede cambiar, es inmutable
  //el segundo elemento que recibe este array en particular lo setea (si es state, el otro es setState con camelCase,) el setter es un actualizador del estado
 
  //el primer estado, valor inicial, de este caso en especifico es estar vacio
    return(
      <input placeholder="Dancing with the coven" className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
    );
  }

  export {TodoSearch}