import React from 'react'
import {CreateTodoButton} from '../CreateTodoButton'
import './TodoListcss.css'

function TodoList(props) {
  return (
    <div className='TodoList'>
        <section className='TodoList-menu'>
            <b className='TodoList-menu-tittle'>Marketing</b>
            <button>Edit</button>
            <button>Duplicate</button>
            <button>Change Status</button>
            <button>Archive</button>
        </section>
        <section className='TodoList-options'>
            <a>Task List</a>
            <a>Performance</a>
        </section>
        <section className='TodoList-newTask'>
            <b>Tasks</b>
            <CreateTodoButton />
        </section>
        
        <div className='todoSections'>
            <section className='todoSections-TaskName'>
                Task name
            </section >
            <section className='todoSections-Deadline'>
                Deadline
            </section>
            <section className='todoSections-Status'>
                Status
            </section>
            <section className='todoSections-Assigne'>
                Assignee
            </section>
        </div>
        <div>
            {props.children}
        </div>
        
    </div>
  )
}

export  {TodoList}