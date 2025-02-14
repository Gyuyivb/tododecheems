import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);
   if (show) {
     return (
        <aside className='aside-alert'>
            <p>There's a change in other window</p>
            <button
            className='btn'
            onClick={() => toggleShow(false)}
            >
                Refresh site
            </button>
        </aside>
    );
    } else{
        return null
    }
}


export { ChangeAlert };