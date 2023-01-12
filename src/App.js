import {TodoProvider} from './components/TodoContext'
import './App.css';
import React, {useEffect, useState } from 'react'




function App() {
  return (
    <>
      <TodoProvider />
    </>
  );
}

export  {App};
