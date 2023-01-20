import React from "react";
import ReactDOM  from 'react-dom';
import './ModalCss.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <section className="Modal">
            {children}
        </section>
        ,document.getElementById('modal'))
}

export {Modal}