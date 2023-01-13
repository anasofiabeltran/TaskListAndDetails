
import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from './components/TodoItem'
import { NavigationBar } from './components/NavigationBar'
import {TodoProvider,context} from './components/TodoContext'
import React from "react";
const AppUI = ()  =>{
    return (
        <TodoProvider>
        
            <section className='navView'>
              <NavigationBar />
            </section>
            
              <context.Consumer>
                {
                  ({
                    loading,
                    searchedTodos,
                    completeTdos,
                    deleteTodos,
                    todos,
                    todosDone,
                    todoSearch,
                    setTodoSearch,
                    user
                  })=>(
                    <>
                    <section className='principalView'>
                     <TodoList>
                        {loading && 'cargando...'}
                          {
                  
                            searchedTodos.map(todo => (
                            <TodoItem showTodo={todo}/>
                          ))
                          }
                        </TodoList>
                      </section>
                      <section className='secundaryView'>
                        <TodoCounter />
                        <TodoSearch />
                      </section>
                    </>
                  )
                }
              </context.Consumer>
        </TodoProvider>
        
      );
}

export {AppUI}
