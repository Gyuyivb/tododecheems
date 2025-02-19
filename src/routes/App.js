import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';
import { NotFoundPage } from './notfound/NotFoundPage';

function App() {
 
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}>
            <Route path=':slug' element={<HomePage/>}/>
          </Route>
          <Route path="/new" element={<NewTodoPage />} />
          <Route path="/edit/:id" element={<EditTodoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export { App };
