import { div, span } from 'framer-motion/client';
import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BiSolidUserDetail } from 'react-icons/bi';
import { CiCircleList } from 'react-icons/ci';
import { FcHome } from 'react-icons/fc';
import { MdChevronRight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrump = () => {
  console.log('re-render occured at breadcrump')
    const loc=useLocation()
    // const[loc,seLocation]=useState(location);
    console.log('loc',loc)
    let currLink='';
  const crumps=loc.pathname.split('/').filter((item)=>item!=='');

{/* <CiCircleList /> */}


const icons={
'inner':'ss',
'inner2':<BiSolidUserDetail />,

'homepage':<FcHome />
}




  return (
    <div className='w-full h-[8%] bg-white flex items-center pl-3 '>
      <span className='bg-slate-50 h-[50%] flex w-[100px] items-center justify-between rounded-tl-md rounded-bl-md'> 
      <AiOutlineHome />
      <Link className='text-slate-800 font-bold' to='/'>Home  </Link><MdChevronRight /></span>
      {crumps.map((items,index)=>{
currLink+=`/${items}`
const lastIndex=index===crumps.length-1;
return lastIndex ?<span className='bg-slate-50 h-[50%] flex w-[100px] items-center justify-between  rounded-tr-md rounded-br-md'> {items}</span>:
<span className='bg-slate-50 h-[50%] flex w-[100px] items-center justify-between '> 
{/* {icons && icons[items] } */}
<Link className='text-slate-800 font-bold' to={currLink}>{items}</Link>
<MdChevronRight /></span>


      })}
     
      
      
      
      </div>
  )
}
