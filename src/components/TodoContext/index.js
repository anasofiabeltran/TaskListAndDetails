
import {useLocalStorage} from '../customHooks/useLocalStorage'
import { AppUI } from '../../AppUI'
import React, {useState} from "react";

const {Provider, Consumer} = React.createContext();
function TodoProvider (props){

    const [user,setUser] = useState("");
    const [todoSearch, setTodoSearch] = useState('')
    const [todosDone, setTodosDone]= useState(0)
    const [deleteTodo, setDeleteTodo] = useState(false)
    let searchedTodos=[]
  
  
    
    const {
      Items: todos,
      setItem: setTodos,
      loading,
      error
    } =useLocalStorage('TODOS_V1',[],deleteTodo)
    
  
  
    if (todoSearch.length <1){
      searchedTodos=todos;
    }else{
      searchedTodos= todos.filter(todo => {
        const todoText = todo.taskName.toLowerCase();
        const search = todoSearch.toLowerCase();
        return todoText.includes(search);
      })
    }
    
   
    
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

    return(
        <>
            <AppUI loading={loading}
                    searchedTodos= {searchedTodos}
                    completeTdos= {completeTdos}
                    deleteTodos= {deleteTodos}
                    todos= {todos}
                    todosDone= {todosDone}
                    todoSearch= {todoSearch}
                    setTodoSearch= {setTodoSearch}
                    user={user}/>
        </>
    );   
}

export {TodoProvider}