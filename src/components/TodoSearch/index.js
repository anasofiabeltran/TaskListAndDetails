import React from 'react'
import './TodoSearchCss.css'

function TodoSearch() {
  return (
    <div className='TodoSearch'>
        <form className='TodoSearch-form'> 
            <label> Search Todo</label>
            <input placeholder='search TODO'/>
        </form>
    </div>
  )
}

export {TodoSearch}