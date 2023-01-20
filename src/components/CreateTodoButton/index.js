import React from 'react'
import addButton from '../../assets/icons/agregar.png'
import { Modal } from "../customHooks/Modal";
import {TodoForm} from "../TodoForm";
import {useMyContext} from '../TodoContext'
import './createTodoButtonCss.css'

function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = useMyContext();

  const buttonToOpenModal = () =>{
    setOpenModal(true)
  }

  return (
    <div className='createTodoButton'>
        <button className='createTodoButton-button' onClick={buttonToOpenModal}>
            <img src={addButton} />
        </button>
        {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}
    </div>
  )
}

export  {CreateTodoButton}