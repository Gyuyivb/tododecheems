import React from "react";
/* 
const defaultTodos = [
  {text: 'Cut onion', completed: true},
  {text: 'Leanr how to sew guts', completed: false},
  {text: 'Walk dog', completed: true},
  {text: 'Eat fingers', completed: false},
  {text: 'Sentir amsieda', completed: false},
  {text: 'Shop groceries', completed: true},
  {text: 'Read Chainsawman', completed: false}
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
*/ // localStorage.removeItem('TODOS_V!');
function useLocalStorage (itemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
  
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else{
        parsedItem=JSON.parse(localStorageItem);
      }
      
      setItem(parsedItem);
      setLoading(false);
      setSincronizedItem(true);
      }catch(error){
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sincronizedItem]);

  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    }
  
    const sincronizeItem = ()=> {
      setLoading(true);
      setSincronizedItem(false);
    }
    return {
      item, 
      saveItem,
      loading,
      error,
      sincronizeItem
    };
  }

  export { useLocalStorage };