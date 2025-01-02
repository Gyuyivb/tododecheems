import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  
    return(
      <div className='container'>
        <input placeholder="Dancing with the coven" className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        />
      </div>
    );
  }

  export {TodoSearch}