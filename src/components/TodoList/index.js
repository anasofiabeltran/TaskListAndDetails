import React from 'react'
import {CreateTodoButton} from '../CreateTodoButton'
import './TodoListcss.css'

function TodoList(props) {
  return (
    <div className='TodoList'>
        <section>
            Marketing
        </section>
        <section>
            Task List
        </section>
        <section className='TodoList-newTask'>
            <h4>Tasks</h4>
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