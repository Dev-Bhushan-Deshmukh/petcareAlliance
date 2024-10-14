import React from 'react'
import { RiServiceFill,RiLoginCircleLine } from "react-icons/ri";
import { MdMan } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsPersonFillAdd } from "react-icons/bs";
export const Login = () => {
  return (
    <div className='h-screen w-screen bg-slate-50 flex  justify-center items-center'>
<div className='h-[90%] w-[40%] bg-white rounded-tr-none rounded-br-none rounded-xl border grid place-items-center'  >



<div className='border h-[90%] w-[90%]  rounded-lg flex flex-col items-center'>

<div className='  w-full h-[10%] rounded-md  flex items-center justify-around '>

<button className='bg-slate-950 border-slate-400 border-2 w-[30%] h-[60%] rounded-md text-slate-50  flex items-center justify-center gap-2'> <RiLoginCircleLine />Login</button>

<button className='bg-slate-950  border-slate-400 border-2 w-[30%] h-[60%] rounded-md text-slate-50 flex items-center justify-center gap-2'> <IoMdAdd />Sign up</button>


</div>

<div className='h-[26%] w-[90%] rounded-md border flex flex-col items-center justify-evenly'>
<h1 className='font-semibold text-[18px]'>Sign up as</h1>
<div className='flex items-center justify-evenly w-full h-[40%]  font-semibold text-slate-600'>

<div className='flex items-center rounded-md border w-[30%] h-[50%] justify-evenly'> 
<FaUser color='green' />
<input type="radio" name='petOwner' /> <label htmlFor="petOwner">pet Owner</label>

</div>
<div className='flex items-center rounded-md border w-[30%] h-[50%] justify-evenly'> 
<RiServiceFill color='red' />
<input type="radio" name='petOwner' /> <label htmlFor="petOwner">pet Service</label>

</div>




</div>
<button className='bg-green-500 border-slate-300 border-2 w-[30%] h-[22%] rounded-md text-slate-50  flex items-center justify-center gap-2'><BsPersonFillAdd /> Join</button>

</div>






</div>














</div>










<div className='h-[90%] w-[40%] bg-petTheme4 bg-cover bg-no-repeat rounded-tl-none rounded-bl-none rounded-xl '></div>





    </div>
  )
}
