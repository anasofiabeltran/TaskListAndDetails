import React from "react";
import './TodoCounterCss.css'

function TodoCounter(){ 
    return(
        <div className="TodoCounter">
            <section className="TodoCounter-user">
                <img />
                <div className="TodoCounter-user-name">
                    Taslima Nasrim
                    <br />
                    Human Resoure Manager
                </div>
            </section>
            <section className="TodoCounter-user-work">
                has completado 2 de 3 TODOs
            </section>
        </div>
    );
}

export {TodoCounter};