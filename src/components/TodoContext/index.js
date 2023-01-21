import {useLocalStorage} from '../customHooks/useLocalStorage'
import React, {useState,useContext, useEffect} from "react";

const context = React.createContext();
const useMyContext = () => useContext(context);
function TodoProvider (props){

    const [user,setUser] = useState("");
    const [todoSearch, setTodoSearch] = useState('')
    
    const [deleteTodo, setDeleteTodo] = useState(false)
    let searchedTodos=[]
  
  
    //
    const {
      Items: todos,
      setItem: setTodos,
      loading,
      error
    } =useLocalStorage('TODOS_V1',[],deleteTodo)
    
    const [todosDone, setTodosDone]= useState([])
    
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
  
    const completeTdos = (id,nameLocalStorage) =>{
      const todoIndex = todos.findIndex(todo => todo.id == id);
      const newTodos = [...todos];
      newTodos[todoIndex].completed= true;
      localStorage.setItem(nameLocalStorage, JSON.stringify(newTodos))
      setTodos(newTodos)
      
    };
    
    const deleteTodos = (id,nameLocalStorage) =>{
      const todoIndex = todos.findIndex(todo => (todo.id == id));
      const newTodos = [...todos];
      newTodos.splice(todoIndex,1);
      localStorage.setItem(nameLocalStorage, JSON.stringify(newTodos))
      setTodos(newTodos)
      
      setDeleteTodo(true)
    };

    const addTodo = (nameLocalStorage,todo) =>{
      localStorage.setItem(nameLocalStorage, JSON.stringify([...todos,todo]))
    }

    const [openModal, setOpenModal] = useState(false)

    const [users, setUsers] = useState([])

    useEffect(()=>{
      setTodosDone(todos.filter(todo => todo.completed == true))
    },[loading,todos])

    return(
        
            <context.Provider value={{
              loading,
              searchedTodos,
              completeTdos,
              deleteTodos,
              todos,
              todosDone,
              todoSearch,
              setTodoSearch,
              user,
              addTodo,
              openModal,
              setOpenModal,
              users,
              setUsers,
            }}>
              {props.children}
            </context.Provider>
        
    );   
}

export {TodoProvider,context,useMyContext}