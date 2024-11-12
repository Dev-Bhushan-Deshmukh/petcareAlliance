import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Searchbar } from './Searchbar'
import { TbClockPlus } from 'react-icons/tb'
import { PiListHeart } from "react-icons/pi";
import { TbSunset2 } from "react-icons/tb";
import { RiSunFill } from "react-icons/ri";
import { IoMoonSharp } from "react-icons/io5";
export const Activity = () => {

const[timetable,setTimeTable]=useState(
  {
  
  activityStart:'',
  activityEnd:'',
  daily:'',
  pets:[],
  activities:{name:'',start:'',end:'',daily:'',expiry:'',note:''}
})

const pets = [
  { src: 'https://w0.peakpx.com/wallpaper/143/746/HD-wallpaper-persian-cat-close-up-gray-cat-kitten-fluffy-cat-cats-domestic-cats-pets-persian.jpg', name: 'Whiskers' },
  { src: 'https://media.istockphoto.com/id/93385233/photo/coahuilan-box-turtle.jpg?s=612x612&w=0&k=20&c=a8l2Td8LuzmxBoGSBjMGRVGTyvDtwNVG0ajxa1AwMno=', name: 'Shelly' },
  { src: 'https://png.pngtree.com/background/20230426/original/pngtree-grey-bunny-is-sitting-on-the-ground-while-in-front-of-picture-image_2481251.jpg', name: 'Thumper' },
  { src: 'https://i.pinimg.com/originals/9d/61/d7/9d61d77d03a5016ab4d1bc19192297f9.jpg', name: 'Fluffy' },
  { src: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3', name: 'Buddy' },
  { src: 'https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZCUyMHBldHxlbnwwfHwwfHx8MA%3D%3D', name: 'Feathers' },
];
const addPets=(e)=>{

let pets=[...timetable.pets];
if(pets.includes(e.target.src)){
  // alert(true)
  let itemIndex=pets.indexOf(e.target.src);
  pets.splice(itemIndex,1);
}
else{

  pets.push(e.target.src)
}
setTimeTable(prev=>({...prev,pets:pets}))


}


  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  //Specified Exit animation
    exit={{ opacity: 0, y: 0 }} className=' h-[85%]  w-full '>
        
        <div className='h-[5%] mb-2 w-full flex items-center pl-2 pr-2 justify-between  '>
<Searchbar  width={40} />
<button className='bg-blue-600 w-[7%] h-full rounded-sm flex items-center text-white justify-center gap-3'> <TbClockPlus /> New</button>
</div>
        

<div className=' w-full h-[70%] flex justify-between pl-2 pr-2'>






<div className='border w-[30%] h-full rounded-md  '>

  
<h1 className='pl-3 font-semibold bg-slate-50 mb-2 rounded-md'>New activity schedule</h1>
<div className=' w-full flex gap-3 justify-start items-center pl-3'>
<label className='w-[20%]'>From</label>
<input type="date" id="appt" name="activityStart" className='border  rounded-md' onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/>


</div>
<div className=' w-full flex gap-3 justify-start items-center pl-3'>
<label htmlFor=""className='w-[20%]'>To</label>
<input type="date" id="appt" name="activityEnd"  className='border  rounded-md' onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/>


<input type="checkbox" id="appt" name="daily"  onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/> 
<label htmlFor="" >Recuring</label>
</div>
<div className=' w-full flex gap-3 justify-start items-center pl-3'>
<label className='w-[20%]'>Repeat</label>
<select name="" id=""></select>
</div>

    <h1 className='pl-3 font-semibold bg-slate-50'>Select pet</h1>
<div className='flex   gap-1 pl-3 justify-start items-center h-[10%]'>
  {pets.map(item=><img src={item.src} onClick={addPets} alt="" className={`${timetable.pets.includes(item.src) &&'border-2 border-red-400 '} rounded-full w-[28px] h-[28px]`} />  
)}

</div>

<h1 className='pl-3 font-semibold bg-slate-50 mb-2'>Activity</h1>

<div className=' pl-3 h-[45%]  justify-center flex flex-col gap-5 '>
<div className='flex gap-3'><label htmlFor="" className='w-[20%]'>Name</label> <input type="text"   className='border w-[50%] rounded-md' name='name' onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}/></div>
<div className='flex gap-3'><label htmlFor=""className='w-[20%]'>Start</label>
<input type="time" id="appt"  className='border rounded-md' name="start" onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}/></div>

<div className='flex gap-3'><label htmlFor=""className='w-[20%]'>End</label>
<input type="time" id="appt" name="end"  className='border rounded-md'  onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}/></div>
<div className='flex gap-3'>

  <label htmlFor=""className='w-[20%]'>Till</label><input className='border rounded-md text-slate-500 text-center' type="date" id="appt" name="expiry"  onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/>

<input type="checkbox" name="daily" id="" value={true}  onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))} />
<label>Daily</label>
</div>

<div className='flex gap-3'>
<label htmlFor=""className='w-[20%]'>Note</label>
<input  id="" className='border rounded-md w-[50%]' name='note' onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}></input>
</div>


</div>

<div className='flex gap-3 items-center h-[6%] pl-3 '>

< button className='w-[45%] h-[95%] bg-blue-600 rounded-md text-slate-50'>Add</button> < button  className='w-[45%] h-[95%] bg-slate-100 border rounded-md text-slate-400'>Clear</button>
</div>





</div>
<div className='border w-[50%] h-full rounded-md flex flex-col'>
  
<h1 className='pl-3 font-semibold bg-slate-50 mb-2 rounded-tl-md rounded-tr-md  h-[7%] flex items-center gap-2 '>New activity schedule</h1>

<div className='h-[6%] flex  justify-center gap-4'>
<div className=' font-semibold  mb-2 rounded-md h-[100%] w-[35%]  flex items-center border'> <label className='w-1/2 grid content-center text-center h-full bg-slate-100 rounded-tl-md rounded-bl-md  ' htmlFor="">Start</label> <div className='w-1/2 h-full text-center   grid content-center'>{timetable.activityStart }</div> </div>

<div className=' font-semibold  mb-2 rounded-md h-[100%] w-[35%]  flex items-center border'> <label className='w-1/2 grid content-center text-center h-full bg-slate-50 rounded-tl-md rounded-bl-md ' htmlFor="">End</label> <div className='w-1/2 h-full text-center  grid content-center'>
{timetable.activityEnd }</div> </div>

<div className=' font-semibold  mb-2 rounded-md h-[100%] w-[25%]  flex items-center border'> <label className='w-1/2 grid content-center text-center h-full bg-slate-100 rounded-tl-md rounded-bl-md  ' htmlFor="">Repeat</label> <div className='w-1/2 h-full text-center   grid content-center'>Monthly</div> </div>

</div>

<h1 className='pl-3 font-semibold bg-slate-50 mt-2 h-[7%] '>Pets</h1>
<div className='flex   gap-1 pl-3 justify-start items-center h-[10%] '>
{timetable.pets.map((item)=><img src={item} className='rounded-full w-[27px] h-[27px]' />) }
</div>

<h1 className='pl-3 font-semibold bg-slate-50 mb-2 h-[7%] flex items-center gap-2'><PiListHeart /> Activities </h1>
<div className=' flex-1 overflow-y-auto pl-3'>
<div className='bg-white w-[92%] h-[25%] border-l-blue-600 border-l-[5px] rounded-sm shadow-md  mb-2 pl-1 pr-1 flex flex-col '>
<div className='flex justify-start items-center h-[40%] w-full gap-3 '>
<RiSunFill color='orange' size={23} />
<div className=' flex-1 flex justify-between items-center'><label htmlFor="" className='font-regular text-slate-400 text-sm'>{`${timetable.activities.start}AM- ${timetable.activities.end}PM` }</label>
<label htmlFor="" className='font-semibold text-slate-500 text-md'>{timetable.activities.name}</label>
<label htmlFor="" className='font-regular text-slate-400 text-sm'>Daily</label></div>

</div>



<div className='flex-1 text-sm text-slate-500'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, dignissimos.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, dignissimos.
</div>





  
</div>
<div className='bg-white w-[92%] h-[25%] border-l-blue-600 border-l-[5px] rounded-sm shadow-md  mb-2'>

<TbSunset2  color='orange' size={23} />
  
</div>
<div className='bg-white w-[92%] h-[25%] border-l-blue-600 border-l-[5px] rounded-sm shadow-md '>

<IoMoonSharp color='orange' size={23} />
  
</div>



</div>





</div>



</div>



        
        </motion.div>
  )
}
