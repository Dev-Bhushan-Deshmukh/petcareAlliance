import { AnimatePresence ,motion} from 'framer-motion'
import React from 'react'

import { TbSunset2 } from "react-icons/tb";
import { RiSunFill } from "react-icons/ri";
import { IoMoonSharp } from "react-icons/io5";


export const TimeTab = ({item}) => {
  return (
    <AnimatePresence>
    <motion.div
     
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
   //Specified Exit animation
    exit={{ opacity: 0, y: 50 }} className='bg-white w-[92%] h-[25%] border-l-blue-600 border-l-[5px] rounded-sm shadow-md  mb-2 pl-1 pr-1 flex flex-col '>
   <div className='flex justify-start items-center h-[40%] w-full gap-3 '>
   
   {item?.activities?.start.split(':')[0]>11 ?<TbSunset2  color='orange' size={23} />:(item?.activities?.start.split(':')[0]>=13 && item?.activities?.start.split(':')[0]<=18  ?<RiSunFill color='orange' size={23} />:<IoMoonSharp color='orange' size={23} />)}
   <div className=' flex-1 flex justify-between items-center'><label htmlFor="" className='font-regular text-slate-400 text-sm'>{`${item.activities.start}${item.activities.start.split(':')[0]>11 ?'PM':'AM'}- ${item.activities.end}${item.activities.end.split(':')[0]>11 ?'PM':'AM'}` }</label>
   <label htmlFor="" className='font-semibold text-slate-500 text-md'>{item?.activities?.name}</label>
   <label htmlFor="" className='font-regular text-slate-400 text-sm'>{item.activities.daily ?'Daily':item.activities.expiry}</label></div>
   
   </div>
   
   
   
   <div className='flex-1 text-sm text-slate-500'>
   {item.activities.note}</div>
   
   
   
   
   
     
   </motion.div>
   </AnimatePresence>
  )
}
