import React from 'react'
import './TodoItemCss.css'

function TodoItem(props) {
  return (
    <section className='item'>
        <section className='item-seccion'>
          <button >-</button>
        </section>
        <section className='item-seccion'>
          {props.showTodo.taskName}
        </section>
        <section className='item-seccion item-seccion-deadLine'>
          {props.showTodo.deadLine}
        </section>
        <section className='item-seccion'>
          {props.showTodo.status}
        </section>
        <section className='item-seccion'>
          <img src={props.showTodo.assignee} />
        </section>
        
    </section>
  )
}

export  {TodoItem}