import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from './components/TodoItem'
import { NavigationBar } from './components/NavigationBar'
import './App.css';
import React, {useEffect, useState } from 'react'




function App() {
  
  const [todos, setTodos] = useState([]);

  const addNewUser = () =>{
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(info => {
          const newUser = {taskName: 'Marketing coordinator', deadLine: '12 Dec 2020', status: true, assignee: info.results[0].picture.thumbnail, completed: false}
        setTodos([...todos,newUser])
      })
  };
  
  if (todos.length<10){
    addNewUser()
  }
  
  
  return (
    <>
    <section className='navView'>
      <NavigationBar />
    </section>
    <section className='principalView'>
      
      <TodoList>
        {
 
        todos.map(todo => (
          <TodoItem showTodo={todo} />
        ))
        }
      </TodoList>
    </section>
    <section className='secundaryView'>
      <TodoCounter />
      <TodoSearch />
    </section>
    
    
    
    </>
    
  );
}

export  {App};
