import logo from './logo.svg';
import './App.css';
import react ,{ Component } from 'react'
import TodoApp from '../src/TodoApp/Todo'
import { render } from '@testing-library/react';
import TodoHooks from './TodoApp/TodoHooks'
import SignIn from './BMJ/SignIn'

function App(){
    return(
      <div>
        {/* <TodoApp />
        <TodoHooks /> */}
        <SignIn />
      </div>
    )
  }
export default App;
