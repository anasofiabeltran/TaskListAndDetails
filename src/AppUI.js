
import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {TodoItem} from './components/TodoItem'
import { NavigationBar } from './components/NavigationBar'
import {TodoProvider,Consumer} from './components/TodoContext'
import React from "react";
const AppUI = ()  =>{
    return (
        <TodoProvider>
        
            <section className='navView'>
              <NavigationBar />
            </section>
            
              <Consumer>
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
                            <TodoItem showTodo={todo} changeTodoCompleted={completeTdos} actionToDeleteTodos={deleteTodos}/>
                          ))
                          }
                        </TodoList>
                      </section>
                      <section className='secundaryView'>
                        <TodoCounter user={user} numberTodos={todos.length} numberTodosDone={todosDone}/>
                        <TodoSearch valueTodoSearch={todoSearch} setValueTodoSearch={setTodoSearch}/>
                      </section>
                    </>
                  )
                }
              </Consumer>
        </TodoProvider>
        
      );
}

export {AppUI}
