import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton(){
    const {
        openModal,
        setOpenModal
    }=React.useContext(TodoContext);

    let modalHandler = openModal
return(
    <button className='CreateTodoButton' onClick={(event) => {
        setOpenModal(!modalHandler);
        console.log('diste click' + openModal)
    }}>
        +
    </button>
);
}

export{CreateTodoButton};