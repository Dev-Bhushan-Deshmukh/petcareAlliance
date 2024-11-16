import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Searchbar } from './Searchbar'
import { TbClockPlus } from 'react-icons/tb'
import { CiViewList } from "react-icons/ci";

import { NewActivity } from './NewActivity';
import { ActivityList } from './ActivityList';
export const Activity = () => {

 const[new_,setNew]=useState(false)
 function  switchTab(){
  setNew(prev=>!prev)
 }
  return (
    
    <motion.div
     
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
 className=' h-[85%]  w-full '>
        
        <div className='h-[5%] mb-2 w-full flex items-center pl-2 pr-2 justify-between  '>
<Searchbar  width={40} />
<button className={`bg-blue-600 ${new_ ? 'w-[7%]':'w-[10%]'} h-full rounded-sm flex items-center text-white justify-center gap-3`} onClick={()=>setNew(prev=>!prev)}> {new_ ? <TbClockPlus />: <CiViewList />}{new_ ? 'New': 'Activities'}  </button>
</div>
{new_ ?<NewActivity/> :<ActivityList/>}





        
        </motion.div>
  )
}
