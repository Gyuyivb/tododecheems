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
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const {
    item,
    loading,
    error,
    sincronizedItem
  } = state;


  // const [item, setItem] = React.useState(initialValue);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [sincronizedItem, setSincronizedItem] = React.useState(true);
  
  //Ation creators
  const onError = (error) =>  dispatch({ type: actionTypes.error, payload: error });
  const onLoading = (item) =>  dispatch({ type: actionTypes.loading, payload: item });
  const onSuccess = (parsedItem) =>  dispatch({ type: actionTypes.success, payload: parsedItem });
  const onSave = (item) =>  dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = (item) =>  dispatch({ type: actionTypes.sincronize, payload: item });

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
      
      onSuccess(parsedItem);
      // setItem(parsedItem);
      // setLoading(false);
      // setSincronizedItem(true);
      }catch(error){
       
        onLoading(false);
        onError(true);
      }
    }, 2000);
  }, [sincronizedItem]);

  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      onSave(newItem);
    }
  
    const sincronizeItem = ()=> {
      onSincronize();
      // setLoading(true);
      // setSincronizedItem(false);
    }
    return {
      item, 
      saveItem,
      loading,
      error,
      sincronizeItem
    };
  }

  const initialState = ({ initialValue }) => ({
    item:  initialValue,
    loading:  true,
    error:  false,
    sincronizedItem:  true,
  });

  const actionTypes = {
    error: 'ERROR',
    loading: 'LOADING',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE',
  };
  const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
      ...state,
       error:true
    },
    [actionTypes.loading]: {
      ...state,
       loading:true
    },
    [actionTypes.success]: {
      ...state,
      error: false,
      loading: false,
      sincronizedItem: true,
      item: payload,
    },
    [actionTypes.save]: {
      ...state,
      item: payload,
    },
    [actionTypes.sincronize]: {
      ...state,
      sincronizedItem:false,
      loading:true
    },

  });

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
    
  }

  export { useLocalStorage };