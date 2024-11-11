import React from 'react'
import { CiCalendarDate } from 'react-icons/ci'
import { FaRegCalendarCheck } from 'react-icons/fa6'
import { PiCalendarCheckLight, PiNoteLight } from 'react-icons/pi'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { BiExpandAlt } from 'react-icons/bi';
export const HistoryItem = ({data}) => {
let styles='rounded-full h-[45%] flex items-center gap-2 justify-center w-full text-center  text-sm font-normal'
let bgObj={
    COMPLETE:'bg-green-50 text-green-400',
    'IN PROGRESS':'bg-white text-slate-800',
    CANCELLED:'bg-red-50 text-red-300',
    PENDING:'bg-slate-100 text-slate-300',
}








    
  return (
    <div className='w-[100%] h-[7%]  border-b-[1px] border-slate-100  flex justify-evenly items-center font-semibold text-slate-600 '>

<div className='w-[9%]  h-full flex items-center justify-start gap-2'>   <img src="https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3" alt="" className='rounded-full w-[23px] h-[23px]' />  {data.petName}</div>
<div className='w-[9%]  h-full flex items-center justify-start gap-2 text-ellipsis overflow-hidden'> {data.serviceType}</div>

<div className='w-[9%]  h-full flex items-center justify-start gap-2 text-ellipsis overflow-hidden line-clamp-[1]'>{data.activity}</div>
<div className='w-[9%]  h-full flex items-center justify-start gap-2'>{data.caregiver}</div>
<div className='w-[9%]  h-full flex items-center justify-start gap-2'><CiCalendarDate /> {data.scheduledDate}</div>
<div className='w-[9%]  h-full flex items-center justify-start gap-2'><PiCalendarCheckLight />{data.completionDate}</div>
<div className='w-[9%]  h-full flex items-center justify-start gap-2'><PiNoteLight />Note <div className='text-white bg-red-500 rounded-full h-[20px] w-[20px] grid place-content-center text-sm font-normal'>{data.notesCount}</div></div>
<div className='w-[9%] h-full flex items-center justify-start gap-2'> 

<div className={`${styles} ${bgObj[data.status]}` }>  {data.status=='IN PROGRESS' && <div className='h-[10px] w-[10px] bg-green-500 rounded-full shadow-md'></div>  } {data.status}</div>

</div>
{/* <div className='w-[9%] h-full flex items-center justify-center gap-2'> */}
    <button className='border-[1px] rounded-md h-[70%] w-[8%] flex items-center justify-center gap-2 text-blue-600 font-semibold'><BiExpandAlt /> view</button>
{/* </div> */}

    </div>
  )
}
