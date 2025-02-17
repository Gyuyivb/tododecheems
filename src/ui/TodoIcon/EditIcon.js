import React from "react";
import {TodoIcon} from '.'

function EditIcon({ onEdit }){
    return (
        <TodoIcon
        type="edit"
        color="rgb(93, 56, 9)"
        OnClick={onEdit}
        />
    );
}

export { EditIcon };