import React, { useEffect, useState } from "react";
import {useMyContext} from '../TodoContext'
import {UsersImage} from './UsersImage'
import {ListUsers} from './ListUsers'
import './TodoFormCss.css'

function TodoForm(){
    const {
        todos,
        addTodo,
        setOpenModal,
        users,
      } = useMyContext();
    
    const [text, setText] = useState("")

    const buttonToOpenModal = () =>{
        setOpenModal(false)
      }
      
    const createNewTask = (info) =>{
        setText(info.target.value)
        console.log(text)
    }

    const [selectedUser, setSelectedUser]= useState("")

    const addNewTask = () =>{
        const newUser = {id: todos.length+1,taskName: text, deadLine: '12 Dec 2020', status: "Active", assignee: selectedUser, completed: false}
        addTodo('TODOS_V1',newUser)
    }

    

    

    return(
        <form className="TodoForm">
            <article>
                <label>Agregar Tarea</label>
                <input onChange={createNewTask} placeholder="Tarea"/>
            </article>
            <h3>Seleccionar usuario asignado</h3>
            <ListUsers>
            {console.log(users)}
               { users.map(user => (<UsersImage user={user} setSelectedUser={setSelectedUser}/>))}
            </ListUsers>
            <article>
                <button onClick={buttonToOpenModal}>Cancelar</button>
                <button onClick={addNewTask}>Aceptar</button>
            </article>
            
        </form>
    );
}

export {TodoForm}