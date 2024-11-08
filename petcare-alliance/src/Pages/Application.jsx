import React from 'react'
import { CollapsibleSidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export const Application = () => {
  return (
   
    <div className='h-screen w-full bg-white flex'>
        
        <CollapsibleSidebar/>
 
        <div className='flex-1 h-full '>

<Outlet/>

</div>
        
        </div>
  )
}
