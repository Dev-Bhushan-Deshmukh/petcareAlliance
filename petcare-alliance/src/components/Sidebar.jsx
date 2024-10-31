import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineHome } from 'react-icons/md';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { FaRegMessage } from 'react-icons/fa6';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { SiAmazongames } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
export const CollapsibleSidebar = () => {
  const[show,setShow]=useState(true);
  // ${show ?'w-[10%]':'w-[30%]'}
  return (
    <AnimatePresence>

    <motion.aside 
    initial={{ width: '20%' }} 
    animate={{ width:show? '20%' :'4%' }}
    // exit={{width:0}}
   className={`h-full  flex flex-col items-center  gap-2 bg-white border-2 border-l-black overflow-hidden`}>

<div className={`flex ${show ?'justify-start':'justify-center'} w-full h-[7%] items-center gap-3  p-1 `}><img onClick={()=>setShow(!show)} className='h-full object-cover rounded-full cursor-pointer' src="https://img.freepik.com/premium-vector/paw-cat-vector-logo_1012247-294.jpg" alt="" />

{show && <span className='font-semibold text-teal-800 text-lg'>Pet care Alliance</span> }
 
 </div>


<div className={`flex ${show ?'justify-start':'justify-center'} cursor-pointer w-[98%] h-[7%] items-center gap-3  pl-1 pr-1 bg-slate-100 rounded-md`}>
<CiSearch onClick={()=>setShow(true)}  fontSize={
  20
} />
{
  show &&
<input className='h-[80%] bg-[#0000] outline-none' placeholder='Search...' type="text" />
}
</div>


   <div className={`flex ${show ?'justify-start':'justify-center'} cursor-pointer w-[98%] h-[7%] items-center gap-3  pl-1 pr-1  rounded-md hover:bg-slate-50`}>

<CgProfile onClick={()=>setShow(true)} color='grey'   fontSize={
  24
} />
{
  show && <span className='font-semibold text-teal-800 text-lg'><Link to='/application/profile/petdetail'>Profile</Link></span> 

}

</div>

<div className={`flex ${show ?'justify-start':'justify-center'} cursor-pointer w-[98%] h-[7%] items-center gap-3  pl-1 pr-1  rounded-md hover:bg-slate-50`}>

<SiAmazongames onClick={()=>setShow(true)} color='grey'   fontSize={
  24
} />
{
  show && <span className='font-semibold text-teal-800 text-lg'><Link to='/game'>Game</Link></span> 

}

</div>

<div className={`flex ${show ?'justify-start':'justify-center'} cursor-pointer w-[98%]  h-[7%] items-center gap-3  pl-1 pr-1  rounded-md hover:bg-slate-50`}>
<RiCalendarScheduleLine onClick={()=>setShow(true)} color='grey'    fontSize={
  20
} />
{
  show &&
<span className='font-semibold text-teal-800 text-lg'> <Link to='/schedule'>schedule</Link> </span> 

}
</div>
<div className={`flex ${show ?'justify-start':'justify-center'} cursor-pointer w-[98%] h-[7%] items-center gap-3  pl-1 pr-1  rounded-md hover:bg-slate-50`}>
<FaRegMessage onClick={()=>setShow(true)} color='grey'    fontSize={
  20
} />
{
  show &&
<span className='font-semibold text-teal-800 text-lg'>  <Link to='/message'>Message</Link></span> 

}
</div>
<div className={`flex ${show ?'justify-start':'justify-center'} cursor-pointer w-[98%] h-[7%] items-center gap-3  pl-1 pr-1  rounded-md hover:bg-slate-50`}>
<TbBrandGoogleAnalytics onClick={()=>setShow(true)} color='grey'    fontSize={
  20
} />
{
  show &&
<span className='font-semibold text-teal-800 text-lg'><Link to='/analytics'>Analytics</Link></span> 
}
</div>
<div className={`flex ${show ?'justify-start':'justify-center'}   cursor-pointer w-[98%] h-[7%] items-center gap-3  pl-1 pr-1  rounded-md hover:bg-slate-50`}>
<IoSettingsOutline onClick={()=>setShow(true)} color='grey'     fontSize={
  20
} />
{
  show &&
<span className='font-semibold text-teal-800 text-lg'><Link to='/setting'>Settings</Link></span>
 }
  </div>







    </motion.aside>
    </AnimatePresence>
  )
}
