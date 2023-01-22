import React from 'react'
import './TodoSearchCss.css'
import {useMyContext} from '../TodoContext'

function TodoSearch({valueTodoSearch, setValueTodoSearch}) {
  const {
        loading,
        searchedTodos,
        completeTdos,
        deleteTodos,
        todos,
        todosDone,
        todoSearch,
        setTodoSearch,
        user
      } = useMyContext();

  const changeSearchValue = (event) =>{
    setTodoSearch(event.target.value)
  }

  return (
    <div className='TodoSearch'>
        <form className='TodoSearch-form'> 
            <label> Search Todo</label>
            <input placeholder='search TODO' onChange={changeSearchValue}/>
        </form>
    </div>
  )
}

export {TodoSearch}