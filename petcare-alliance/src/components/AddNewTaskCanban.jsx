import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { useRef } from 'react';
import { IoMdAdd } from "react-icons/io";
import { date } from 'yup';
export const AddNewTaskCanban = ({AddNewTaskCanbann,status}) => {

// console.log(AddNewTaskCanban_)

    const[addNew,setAddNew]=useState(false);
    const inputRef=useRef(null);
   function AddNewTaskCanban(){
       console.log('ss')
       let newIt={ id:Date.now(), title:inputRef.current.value, status:status}
       AddNewTaskCanbann(  newIt )
        setAddNew(false)
    }
  return (
   <div className='w-full h-fit '>
   
   {!addNew ? <button onClick={()=>setAddNew(true)} className='flex items-center  gap-1   rounded-md w-fit px-3'>     <IoMdAdd />  <span>New</span> </button>
   
   :<div className='flex '>  
    
    <input type="text" ref={inputRef} className='flex-1 border-2 border-slate-100'  /> <button className='' onClick={AddNewTaskCanban}>Add</button>
    </div>}
   
   </div>
  )
}
