import React from "react";

function useStorageListener(sincronize){
    const [strogeChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) =>{
        if (change.key === 'TODOS_V1') {
            setStorageChange(true);
            }
        });
        const toggleShow = () => {
            sincronize();
            setStorageChange(false);
        };
        return{
            show: strogeChange,
            toggleShow,
        };
    
}


export { useStorageListener };