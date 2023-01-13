import {TodoProvider} from './components/TodoContext'
import { AppUI } from './AppUI'
import './App.css';
import React, {useEffect, useState } from 'react'




function App() {
  return (
    <>
    <TodoProvider>
      <AppUI />
    </TodoProvider>
      
    </>
  );
}

export  {App};
