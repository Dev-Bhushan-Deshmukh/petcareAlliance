import React from 'react'

import { MdStarBorder } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
export const Book = () => {
let arr=[1,12,3,43,5,,6,56,7,67,8,78,4,53,5454,5,54,5,45,4,6,56,6,56,7,67,8,78,4,53,5454,5,54,5,45,4,6,56,5,7,677,67,7]

  return (
    <>

<div className='w-full h-[5%] '></div>
       
       <div className='w-full h-[90%] flex flex-wrap gap-5  justify-start pl-2  overflow-y-scroll'>

{/* <div className='w-[90%] h-[35%] border'></div> */}
{arr.map((item)=> 
<div className='border shadow-sm w-[45%] h-[30%]   rounded-md flex '>
   
   <img  className='w-[30%]  object-cover'  src="https://cdn-bcldb.nitrocdn.com/kLRdXZGeQymYELvyTfXVsQALHhzNRamH/assets/images/optimized/rev-4d38e61/www.teamais.net/wp-content/uploads/2020/08/vet-min.jpg" alt="" />
   
   <div className='flex-1 h-full  '>
   <h1 className='text-slate-700 font-semibold bg-slate-50 pl-1'>Robert grine</h1>
   <div className='text-sm font-semibold text-slate-500 flex items-center gap-1 pl-1'> <CiLocationOn /> Pune    <MdStarBorder color='orange' />4.5 <span className='font-normal text-sm'>122 ratings</span> </div>
   <div className='h-[40%] text-slate-500  text-sm text-justify pl-1 pr-1 '>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores quis minima. Deleniti, necessitatibus tempora. Dicta perspiciatis fuga accusamus natus nihil? Autem quisquam illum sit unde hic repudiandae iure amet?
   </div>
   <div className='text-sm text-green-500 font-semibold  flex gap-5  pl-1'>On site service  <span className='text-sm text-slate-500 font-normal'>15$ per hour</span></div>
      
   <div className='flex gap-1 h-[11%] pl-1 mt-1 '>
     
      <div className='h-full min-w-[10%] w-fit p-1  rounded-sm border text-sm text-slate-500 bg-slate-50 grid place-content-center'>Pet sitting</div>
      
      <div className='h-full min-w-[10%] w-fit p-1 rounded-sm border text-sm text-slate-500 bg-slate-50 grid place-content-center'>Walk</div>
      
      <div className='h-full min-w-[10%] w-fit p-1   rounded-sm border text-sm text-slate-500 bg-slate-50 grid place-content-center'>Pet sitting</div>
      
      
      
      
      
      
      
       </div>
       <button className='bg-orange-400 rounded-sm text-sm mt-2 ml-1 w-[30%] h-[30px] text-slate-100  hover:bg-green-500  '> <Link to={`/application/service/booking?name=${item.id}`}>
  
  Book now
    
    </Link></button>    
   </div>
 
   </div>)}
 

   
 
   
   
   
       </div>
    

 
    
    </>
  )
}
