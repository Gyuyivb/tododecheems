import React from 'react';
import './TodoSearch.css';
import { useLocation, useNavigate } from 'react-router-dom';

function TodoSearch({ searchValue, setSearchValue, loading }) {

  const navigate = useNavigate();
  const location = useLocation();
  let textSearchValue = searchValue;

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    navigate('?search=' + event.target.value);
  };
  if(location.search && !loading) {
    textSearchValue = location.search.replace('?search=', '');
    setTimeout(()=>setSearchValue(textSearchValue),50);
  }

  return(
    <div className='container'>
      <input placeholder="Dancing with the coven" className='TodoSearch'
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
      />
    </div>
  );
}

export {TodoSearch}