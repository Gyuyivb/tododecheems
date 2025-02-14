import React from "react";
import {TodoIcon} from './'

function DeleteIcon({ onDelete }){
    return (
        <TodoIcon
        type="delete"
        color="rgb(209, 134, 58)"
        OnClick={onDelete}
        />        
    );
}

export { DeleteIcon };