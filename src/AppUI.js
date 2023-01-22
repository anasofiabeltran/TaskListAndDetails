
import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from './components/TodoItem'
import { NavigationBar } from './components/NavigationBar'
import {TodoProvider,context} from './components/TodoContext'
import {useMyContext} from './components/TodoContext'
import React,{useEffect} from "react";

import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const AppUI = ()  =>{
  const {
    loading,
    searchedTodos,
    completeTdos,
    deleteTodos,
    todos,
    todosDone,
    todoSearch,
    setTodoSearch,
    user,
    users,
    setUsers,
  }= useMyContext();

  useEffect(()=>{
    let newUsers = []
    for (let i=0; i<10; i++){
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(info => {
        const newUser = info.results[0].picture.thumbnail
        newUsers.push(newUser)
        
    })
    setUsers(newUsers)
    }
    
},[])

    return (
        <>
            <section className='navView'>
              <NavigationBar />
            </section>
            <section className='principalView'>
            <TodoList>
              {loading && (<Spinner />)}
                {
                  searchedTodos.map(todo => (
                  <TodoItem showTodo={todo}/>
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

export {AppUI}
