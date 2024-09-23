import React from "react";
import {TodoIcon} from './'

function CompleteIcon({ completed, onComplete }){
    return (
        <TodoIcon
        type="check"
        color={completed ? 'rgb(153, 180, 19)' : 'gray'}
        OnClick={onComplete}
        />
    );
}

export { CompleteIcon };