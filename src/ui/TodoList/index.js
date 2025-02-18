import './TodoList.css';

function TodoList(props) {
  //Renderfunc es una funcion que e devuelve un componente y recibe un todo
  const renderFunc = props.children || props.render
    return(
      <section className='TodoList-container'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
        {
        // esto es basicamente lo que hace la cosa de abajo pero mejor explicado y teniendo en cuenta los patrones de composicion, pero asi funciona porque es asi como se maneja js
        // props.searchedTodos.map((todo)=>renderFunc(todo));
        }
        {!props.loading && props.searchedTodos.map(renderFunc)}

        {/* <ul className='Todo-list'>
          {props.children}
        </ul> */}
      </section>
    );
  }

  export {TodoList}