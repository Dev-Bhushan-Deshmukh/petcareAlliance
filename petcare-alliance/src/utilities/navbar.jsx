import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='w-full h-[7%] bg-black flex justify-between items-center pl-5 pr-5'>
<div className=' text-white font-semibold text-[20px]'>Petcare Alliance</div>
<div className='flex justify-between items-center  h-full w-[40%] '>
<ul className='  h-full w-[80%] flex justify-evenly items-center text-slate-400'>
<li>Service</li>
<li>Contact</li>
<li>About</li>

</ul>

<button className='text-white bg-green-500 h-[60%] w-[20%] rounded-sm'><Link to='/auth'>SignUp/login</Link></button>



</div>





    </nav>
  )
}
