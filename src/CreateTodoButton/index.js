import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }){

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