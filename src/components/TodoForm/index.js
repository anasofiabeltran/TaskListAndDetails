import React, { useState } from "react";
import {useMyContext} from '../TodoContext'
import './TodoFormCss.css'

function TodoForm(){
    const {
        todos,
        addTodo,
        setOpenModal,
      } = useMyContext();
    
    const [text, setText] = useState("")

    const buttonToOpenModal = () =>{
        setOpenModal(false)
      }
      
    const createNewTask = (info) =>{
        setText(info.target.value)
        console.log(text)
    }

    const addNewTask = () =>{
        const newUser = {id: todos.length+1,taskName: text, deadLine: '12 Dec 2020', status: "Active", assignee: '', completed: false}
        addTodo('TODOS_V1',newUser)
    }

    return(
        <form className="TodoForm">
            <article>
                <label>Agregar Tarea</label>
                <input onChange={createNewTask} placeholder="Tarea"/>
            </article>
            <article>
                <button onClick={buttonToOpenModal}>Cancelar</button>
                <button onClick={addNewTask}>Aceptar</button>
            </article>
            
        </form>
    );
}

export {TodoForm}