import React from 'react'
import { Breadcrump } from '../components/Breadcrump'
import { FaUser } from 'react-icons/fa6'
import { MdAlternateEmail, MdLocationOn } from 'react-icons/md'
import { FaMobileAlt } from 'react-icons/fa'
import { PiCity, PiSignpostFill } from 'react-icons/pi'
import { Outlet, useNavigate } from 'react-router-dom'
import { TabBar } from '../components/TabBar'
import { AnimatePresence } from 'framer-motion'

export const Profile = () => {
  const Navigate=useNavigate();
  return (
    <div className='h-full w-full  '>


<Breadcrump/>

<div className='h-[92%] w-full  flex '>
  <div className='h-full w-[20%] flex flex-col items-center bg-white'>

<img src="https://img.freepik.com/premium-photo/young-african-american-man-brown-jacket-poses-street_115318-8153.jpg" alt="" className=' w-[95%] mt-2 rounded-md' />






<div className='flex-1 w-[95%] flex flex-col gap-3 '>

<h1 className='font-semibold text-slate-500 mt-1 text-lg'>Bhushan Deshmukh</h1>
<div className='flex items-center rounded-md   w-[50%] h-[4%]  gap-2 font-semibold text-slate-500 bg-slate-100'> 
<FaUser color='green' />
 <label htmlFor="petOwner">pet Owner</label>

</div>
<label className='flex items-center gap-2 font-semibold text-slate-600' htmlFor="petOwner"> <MdAlternateEmail /> bhushan@gmail.com</label>

<label className='flex items-center gap-2 font-semibold text-slate-600' htmlFor="petOwner"><FaMobileAlt />+91 7350206770</label>

<label className='flex items-center gap-2 font-semibold text-slate-600' htmlFor="petOwner"><PiCity />Bostan</label>

<label className='flex items-center gap-2 font-semibold text-slate-600' htmlFor="petOwner"><MdLocationOn />Bostan, Wall street 2007 new City</label>

<label className='flex items-center gap-2 font-semibold text-slate-600' htmlFor="petOwner"><PiSignpostFill /> 411254</label>
<button onClick={()=>Navigate('/application/profile/History')}>ss</button>
</div>


  </div>
  <div className=' h-full flex-1 '>
  <TabBar/>
  <AnimatePresence>

  <Outlet />
  </AnimatePresence>
 
  </div>
 





</div>


    </div>
  )
}
