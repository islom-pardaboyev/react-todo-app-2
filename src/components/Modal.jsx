 import { faL } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
 
 function Modal({children, isOpenModal }) {
   return (
     <div id='wrapper' className={` ${isOpenModal ? "scale-100" : "scale-0"} duration-300 fixed top-0 bottom-0 right-0 left-0 backdrop-blur-md`}>
        <div className='w-[500px] p-5 rounded-xl bg-blue-300 mx-auto'>{children}</div>
     </div>
   )
 }
 
 export default Modal