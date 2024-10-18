import React, { useState } from 'react'
import { RiServiceFill,RiLoginCircleLine } from "react-icons/ri";
import { MdMan } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { PiPawPrintFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { Form_ } from '../components/Form';
export const Login = () => {

const[showLogin,setShowlogin]=useState(false)
const [userType,setUserType]=useState()
const [formVisible,setFormVisible]=useState(false);

  return (
    <div className='h-screen w-screen bg-slate-50 flex  justify-center items-center'>
<div className='h-[90%] w-[40%] bg-white rounded-tr-none rounded-br-none rounded-xl border grid place-items-center'  >



<div className='border h-[90%] w-[90%]  rounded-lg flex flex-col items-center'>

<div className='  w-full h-[10%] rounded-md  flex items-center justify-around '>

<button className='bg-slate-950 border-slate-400 border-2 w-[30%] h-[60%] rounded-md text-slate-50  flex items-center justify-center gap-2
 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 hover:border-0 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] duration-300'
  onClick={()=>{setShowlogin(true) ;setFormVisible(false)}}> <RiLoginCircleLine />Login</button>

<button className='bg-slate-950 border-slate-400 border-2 w-[30%] h-[60%] rounded-md text-slate-50  flex items-center justify-center gap-2 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-orange-700 hover:border-0 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] duration-300' onClick={()=>{setShowlogin(false)}}> <IoMdAdd />Sign up</button>


</div>
<AnimatePresence>
  {!showLogin && !formVisible  && <motion.div
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
//Specified Exit animation
  exit={{ opacity: 0, y: 50 }}
  
  className='h-[26%] w-[90%] rounded-md border flex flex-col items-center justify-evenly'>
<h1 className='font-semibold text-[18px]'>Sign up as</h1>
<div className='flex items-center justify-evenly w-full h-[40%]  font-semibold text-slate-600'>

<div className='flex items-center rounded-md border w-[30%] h-[50%] justify-evenly'> 
<FaUser color='green' />
<input type="radio" name='petOwner' value='owner' onChange={(e)=>setUserType(e.target.value)} /> <label htmlFor="petOwner">pet Owner</label>

</div>
<div className='flex items-center rounded-md border w-[30%] h-[50%] justify-evenly'> 
<RiServiceFill color='red' />
<input type="radio" name='petOwner' value='service' onChange={(e)=>setUserType(e.target.value)} /> <label htmlFor="petOwner">pet Service</label>

</div>




</div>
{/* <button className='bg-green-500 border-slate-300 border-2 w-[30%] h-[22%] rounded-md text-slate-50  flex items-center justify-center gap-2'><BsPersonFillAdd /> Join</button> */}
<button className='bg-green-500 border-slate-300 border-2 w-[30%] h-[22%] rounded-md text-slate-50  flex items-center justify-center gap-2 transition ease-in-out  hover:-translate-y-1 hover:scale-[101%] hover:bg-green-600 hover:border-0 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] duration-300' onClick={()=>setFormVisible(true)}><BsPersonFillAdd />Join</button>

</motion.div> }
{!showLogin && formVisible  &&

<Form_ userType={userType}/>
}
</AnimatePresence>
<AnimatePresence>
{showLogin &&
  <motion.div
  
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
//Specified Exit animation
  exit={{ opacity: 0, y: 50 }}
  className='h-[26%] w-[90%] rounded-md border flex flex-col items-center justify-evenly'>
<h1 className='font-semibold text-[18px]'>login </h1>
<div className='flex flex-col items-center gap-3  w-full h-[45%]  font-semibold text-slate-600'>

<div className='flex items-center rounded-md border w-[60%] h-[42%] justify-start pl-2 gap-2'> 
<FaUser  />
<input type="text" name='petOwner' className='flex-1 outline-none placeholder-slate-300 ' placeholder='Enter username or email' />

</div>
<div className='flex items-center rounded-md border w-[60%] h-[42%] justify-start pl-2 gap-2'> 
<IoMdLock />
<input type="password" name='petOwner' className='flex-1 outline-none placeholder-slate-300 ' placeholder='Enter password' />

</div>




</div>
<button className='bg-blue-500 border-slate-300 border-2 w-[60%] h-[22%] rounded-md text-slate-50  flex items-center justify-center gap-2 transition ease-in-out  hover:-translate-y-1 hover:scale-[101%] hover:bg-blue-600 hover:border-0 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] duration-300'><PiPawPrintFill />Login</button>

</motion.div>


}
</AnimatePresence>






</div>














</div>










<div className='h-[90%] w-[40%] bg-petTheme4 bg-cover bg-no-repeat rounded-tl-none rounded-bl-none rounded-xl '></div>





    </div>
  )
}
