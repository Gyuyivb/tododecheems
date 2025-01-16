import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };