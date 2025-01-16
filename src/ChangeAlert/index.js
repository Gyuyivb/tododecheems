import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
   if (show) {
     return (
        <div>
            <p>Habemus change</p>
            <button
            onClick={() => toggleShow(false)}
            >
                Refresh site
            </button>
        </div>
    );
    } else{
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };