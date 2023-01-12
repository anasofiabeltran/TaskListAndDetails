import React from 'react'
import './TodoSearchCss.css'

function TodoSearch({valueTodoSearch, setValueTodoSearch}) {

  const changeSearchValue = (event) =>{
    setValueTodoSearch(event.target.value)
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