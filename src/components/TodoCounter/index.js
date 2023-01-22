import React from "react";
import './TodoCounterCss.css'
import {useMyContext} from '../TodoContext'
function TodoCounter(props){ 
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
    return(
        <div className="TodoCounter">
            <section className="TodoCounter-user">
                
                <img src={user}/>
                <div className="TodoCounter-user-name">
                    <p>Taslima Nasrim</p>
                   <span className=" text">Human Resoure Manager</span> 
                </div>
            </section>
            <section className="TodoCounter-user-work">
                has completado '{todosDone.length}' de '{todos.length}' TODOs
            </section>
        </div>
    );
}

export {TodoCounter};