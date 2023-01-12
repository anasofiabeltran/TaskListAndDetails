import React from "react";
import './TodoCounterCss.css'

function TodoCounter(props){ 
    
    return(
        <div className="TodoCounter">
            <section className="TodoCounter-user">
                
                <img src={props.user}/>
                <div className="TodoCounter-user-name">
                    Taslima Nasrim
                    <br />
                    Human Resoure Manager
                </div>
            </section>
            <section className="TodoCounter-user-work">
                has completado '{props.numberTodosDone}' de {props.numberTodos} TODOs
            </section>
        </div>
    );
}

export {TodoCounter};