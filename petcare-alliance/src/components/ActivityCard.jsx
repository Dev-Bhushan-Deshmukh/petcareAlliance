import React from 'react'
import { PiListHeart } from "react-icons/pi";
import { TimeTab } from './TimeTab';
export const ActivityCard = ({timetable,activityList}) => {
  return (
<div className='border w-[50%] h-full rounded-md flex flex-col'>
  
  <h1 className='pl-3 font-semibold bg-slate-50 mb-2 rounded-tl-md rounded-tr-md  h-[7%] flex items-center gap-2 '>New activity schedule</h1>
  
  <div className='h-[6%] flex  justify-center gap-4'>
  <div className=' font-semibold  mb-2 rounded-md h-[100%] w-[35%]  flex items-center border'> <label className='w-1/2 grid content-center text-center h-full bg-slate-100 rounded-tl-md rounded-bl-md  ' htmlFor="">Start</label> <div className='w-1/2 h-full text-center   grid content-center'>{timetable.activityStart }</div> </div>
  
  <div className=' font-semibold  mb-2 rounded-md h-[100%] w-[35%]  flex items-center border'> <label className='w-1/2 grid content-center text-center h-full bg-slate-50 rounded-tl-md rounded-bl-md ' htmlFor="">End</label> <div className='w-1/2 h-full text-center  grid content-center'>
  {timetable.daily ? timetable.daily :timetable.activityEnd }</div> </div>
  
  <div className=' font-semibold  mb-2 rounded-md h-[100%] w-[25%]  flex items-center border'> <label className='w-1/2 grid content-center text-center h-full bg-slate-100 rounded-tl-md rounded-bl-md  ' htmlFor="">Repeat</label> <div className='w-1/2 h-full text-center   grid content-center'>Monthly</div> </div>
  
  </div>
  
  <h1 className='pl-3 font-semibold bg-slate-50 mt-2 h-[7%] '>Pets</h1>
  <div className='flex   gap-1 pl-3 justify-start items-center h-[10%] '>
  {timetable.pets.map((item)=><img src={item} className='rounded-full w-[27px] h-[27px]' />) }
  </div>
  
  <h1 className='pl-3 font-semibold bg-slate-50 mb-2 h-[7%] flex items-center gap-2'><PiListHeart /> Activities </h1>
  <div className=' flex-1 overflow-y-auto pl-3'>
  {activityList.map((item)=>
   <TimeTab item={item}/>
  )}
  
  
  
  
  
  </div>
  
  
  
  
  
  </div>
  )
}
