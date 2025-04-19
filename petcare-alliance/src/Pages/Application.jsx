import React, { useEffect } from 'react'
import { CollapsibleSidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { newNotification } from '../slices/notification';

export const Application = () => {
  

  const dispatch=useDispatch();
  useEffect(()=>{
    setTimeout(() => {
      dispatch(newNotification({id:`${new Date().getSeconds()}`,name:'PArent',message:'Parent notification arrived'}))
    }, 20000);
  },[]);

  return (
   
    <div className='h-screen w-full bg-white flex'>
        
        <CollapsibleSidebar/>
 
        <div className='flex-1 h-full '>

<Outlet/>

</div>
        
        </div>
  )
}
