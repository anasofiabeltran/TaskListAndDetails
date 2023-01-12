import React, {useState } from 'react'
import cuadrado from '../../assets/icons/cuadrado.png'
import checkBox from '../../assets/icons/check.png'
import eliminate from '../../assets/icons/cerrar.png'
import './TodoItemCss.css'

function TodoItem(props) {

  const [imgButton,setImgButton] = useState (cuadrado)
  const [completed, setCompleted] = useState(props.showTodo.completed)
  

  const checkToDo = () =>{
    setImgButton(checkBox)
    setCompleted(true)
    props.changeTodoCompleted(props.showTodo.id)
  }
  


  return (
    <section className={`item ${  completed && `taskDone`}`}>
      <div>
        <section >
          <button >
            <img src={imgButton} onClick={checkToDo}/>
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
          <button onClick={()=>props.actionToDeleteTodos(props.showTodo.id)}>
            <img src={eliminate} />
          </button>
        </section>
    </section>
  )
}

export  {TodoItem}