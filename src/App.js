import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from './components/TodoItem'
import { NavigationBar } from './components/NavigationBar'
import './App.css';
import React, {useEffect, useState } from 'react'




function App() {
  
  const [todos, setTodos] = useState([]);
  const [user,setUser] = useState("");
  const [todoSearch, setTodoSearch] = useState('')
  const [todosDone, setTodosDone]= useState(0)
  const [deleteTodo, setDeleteTodo] = useState(false)
  let searchedTodos=[]

  
  const addNewUser = () =>{
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(info => {
          const newUser = {id: todos.length+1,taskName: 'Marketing coordinator', deadLine: '12 Dec 2020', status: "Active", assignee: info.results[0].picture.thumbnail, completed: false}
        setTodos([...todos,newUser])
      })
  };


  if (todoSearch.length <1){
    searchedTodos=todos;
  }else{
    searchedTodos= todos.filter(todo => {
      const todoText = todo.taskName.toLowerCase();
      const search = todoSearch.toLowerCase();
      return todoText.includes(search);
    })
  }
  
  if (todos.length<10 && !deleteTodo){
    addNewUser()
  };
  
  if (user ==""){
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(info => {
      setUser(info.results[0].picture.thumbnail)
    } )
  };

  const completeTdos = (id) =>{
    const todoIndex = todos.findIndex(todo => todo.id == id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed= true;
    setTodos(newTodos)
    setTodosDone(todosDone+1)
  };
  
  const deleteTodos = (id) =>{
    const newTodos = todos.filter(todo => !(todo.id == id));
    setTodos(newTodos)
    setDeleteTodo(true)
  };

  return (
    <>
    <section className='navView'>
      <NavigationBar />
    </section>
    <section className='principalView'>
      
      <TodoList>
        {
 
          searchedTodos.map(todo => (
          <TodoItem showTodo={todo} changeTodoCompleted={completeTdos} actionToDeleteTodos={deleteTodos}/>
        ))
        }
      </TodoList>
    </section>
    <section className='secundaryView'>
      <TodoCounter user={user} numberTodos={todos.length} numberTodosDone={todosDone}/>
      <TodoSearch valueTodoSearch={todoSearch} setValueTodoSearch={setTodoSearch}/>
    </section>
    
    
    
    </>
    
  );
}

export  {App};
