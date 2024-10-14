import React from 'react'
import { Navbar } from '../utilities/navbar'
import dogProfile from '../assets/360_F_720414905_F65G0whDHOSyPG8Z0LsUt47C1E1bx4nu.jpg'
import catProfile from '../assets/beautiful-cute-cat-wallpaper_776894-54300_1_-removebg-preview.png'
import { TbClock24 } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBriefcaseMedical } from "react-icons/fa6";
export const Home = () => {
  return (
    <div className='bg-slate-50 h-screen w-screen  '>

<Navbar/>
{/* bg-petTheme bg-no-repeat bg-center bg-cover */}
<div className='w-full h-[60%] bg-white flex items-center relative  border-slate-900 '>
<img src={dogProfile} alt=""  />

<div className='h-[100%]  flex flex-col justify-end w-[50%] font-semibold  text-slate-700  '>
<h1 className='text-[45px] text-slate-600 font-bold'>Petcare Alliance</h1>
<h1 className='text-[25px] text-slate-500 '>We care</h1>
<h1 className='text-[27px] text-slate-500'>Where Your Pets Find Care, Love, and Comfort—Even When <br /> You're Away!</h1>
{/* <button className='   border-orange-500 border-2  w-[25%] h-[15%] bg-slate-950 text-orange-400'>Take service</button> <br /> <br /> */}


<button className='   border-slate-400 rounded-md border-2  w-[25%] h-[8%] bg-slate-950 text-slate-300 text-[19px]'>Join us</button>

<br />
<h2>"Over <span className='text-bold text-green-500'> 1,000</span> pets cared for"</h2>

<div className='h-[20%] w-full  flex items-center justify-start gap-10'>


<img src='https://w0.peakpx.com/wallpaper/143/746/HD-wallpaper-persian-cat-close-up-gray-cat-kitten-fluffy-cat-cats-domestic-cats-pets-persian.jpg' className='h-[110px] w-[110px] object-cover rounded-full'/>
<img src='https://media.istockphoto.com/id/93385233/photo/coahuilan-box-turtle.jpg?s=612x612&w=0&k=20&c=a8l2Td8LuzmxBoGSBjMGRVGTyvDtwNVG0ajxa1AwMno=' className='h-[110px] w-[110px] object-cover  rounded-full'/>
<img src='https://png.pngtree.com/background/20230426/original/pngtree-grey-bunny-is-sitting-on-the-ground-while-in-front-of-picture-image_2481251.jpg' className='h-[110px] w-[110px] object-cover rounded-full'/>
<img src='https://i.pinimg.com/originals/9d/61/d7/9d61d77d03a5016ab4d1bc19192297f9.jpg' className='h-[110px] w-[110px]  object-cover   rounded-full'/>
<img src='https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3' className='h-[110px] w-[110px] object-cover rounded-full'/>
<img src='https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZCUyMHBldHxlbnwwfHwwfHx8MA%3D%3D' className='h-[110px] w-[110px]  object-cover  rounded-full'/>

</div>
</div>




<img src={catProfile} alt="" className='absolute bottom-0 right-0 h-[40%]'  />
</div>

<h1 className='w-full text-center font-bold text-[22px] text-slate-600'>Services</h1>
<div className='h-[29%] w-[100%]  relative flex flex-col justify-end'>

<div className='h-[60%] w-[100%] absolute top-0 flex items-center justify-center gap-6 '>

    <div className='h-full w-[20%] flex flex-col items-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-gray-300

'>

<TbClock24 fontSize={35} />







</div>
  <div className='h-full w-[20%] flex flex-col items-center  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-300
'>

<FaBriefcaseMedical fontSize={35} />

</div>
  <div className='h-full w-[20%] flex flex-col items-center bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-gray-300
'>

<TbTruckDelivery fontSize={35} />

</div>
</div>
<div className='h-[70%] w-[100%] bg-black   '>

</div>
</div>
    
    </div>
  )
}
