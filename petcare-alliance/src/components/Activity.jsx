import React from 'react'
import { motion } from 'framer-motion'
import { Searchbar } from './Searchbar'
import { TbClockPlus } from 'react-icons/tb'
export const Activity = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  //Specified Exit animation
    exit={{ opacity: 0, y: 0 }} className=' h-[85%]  w-full '>
        
        <div className='h-[5%] mb-2 w-full flex items-center pl-2 pr-2 justify-between  '>
<Searchbar  width={40} />
<button className='bg-blue-600 w-[7%] h-full rounded-sm flex items-center text-white justify-center gap-3'> <TbClockPlus /> New</button>
</div>
        

<div className=' w-full h-[70%] flex justify-between pl-2 pr-2'>






<div className='border w-[30%] h-full rounded-md'>
    <h1>Select pet</h1>
<div className='flex gap-1 justify-center items-center h-[10%]'>
<img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3" alt="" className='rounded-full w-[23px] h-[23px]' />  
<img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3" alt="" className='rounded-full w-[23px] h-[23px]' />  
<img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3" alt="" className='rounded-full w-[23px] h-[23px]' />  
<img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3" alt="" className='rounded-full w-[23px] h-[23px]' />  
<img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3" alt="" className='rounded-full w-[23px] h-[23px]' />  
<img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3" alt="" className='rounded-full w-[23px] h-[23px]' />  
<img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3" alt="" className='rounded-full w-[23px] h-[23px]' />  

</div>

</div>
<div className='border w-[50%] h-full rounded-md'>


</div>



</div>



        
        </motion.div>
  )
}
