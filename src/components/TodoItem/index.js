import React, {useState } from 'react'
import cuadrado from '../../assets/icons/cuadrado.png'
import checkBox from '../../assets/icons/check.png'
import eliminate from '../../assets/icons/cerrar.png'
import {useMyContext} from '../TodoContext'
import './TodoItemCss.css'

function TodoItem(props) {

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

  const [imgButton,setImgButton] = useState (cuadrado)
  

  const checkToDo = () =>{
    setImgButton(checkBox)
    console.log(props.showTodo.id)
    completeTdos(props.showTodo.id,'TODOS_V1')
  }
  

  
  return (
    <section className={`item ${  props.showTodo.completed && `taskDone`}`}>
      <div>
        <section >
          <button >
            {!props.showTodo.completed && (<img src={imgButton} onClick={checkToDo}/>)}
          </button>
        </section>
        <section >
          {props.showTodo.taskName}
        </section>
      </div>
        
        <section className='item-seccion item-seccion-deadLine'>
          {props.showTodo.deadLine}
        </section>
        <section className='item-seccion'>
          {props.showTodo.status}
        </section>
        <section className='item-seccion'>
          <img src={props.showTodo.assignee} />
        </section>
        <section className='item-seccion'>
          <button onClick={()=>deleteTodos(props.showTodo.id,'TODOS_V1')}>
            <img src={eliminate} />
          </button>
        </section>
    </section>
  )
}

export  {TodoItem}