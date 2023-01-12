import React from 'react'
import addButton from '../../assets/icons/agregar.png'
import './createTodoButtonCss.css'

function CreateTodoButton() {
  return (
    <div className='createTodoButton'>
        <button className='createTodoButton-button'>
            <img src={addButton} />
        </button>
    </div>
  )
}

export  {CreateTodoButton}