import React from 'react'
import calendario from '../../assets/icons/calendario.png'
import banderas from '../../assets/icons/banderas.png'
import mecanico from '../../assets/icons/mecanico.png'
import mensaje from '../../assets/icons/mensaje.png'
import burbuja from '../../assets/icons/burbuja-de-chat.png'
import reloj from '../../assets/icons/reloj-de-pared.png'
import './NavigationBarCss.css'
function NavigationBar() {
  return (
 
    <div className='NavigationBar'> 
      <h4>AC </h4>
      <section>
        <button><img className='zoom' src={calendario}/></button>
        <button><img className='zoom' src={reloj}/></button>
        <button><img className='zoom' src={burbuja}/></button>
        <button><img className='zoom' src={mensaje}/></button>
        <button><img className='zoom' src={banderas}/></button>
        <button><img className='zoom' src={mecanico}/></button>
        
      </section>
        
      
      
    </div>

    
  )
}

export  {NavigationBar}