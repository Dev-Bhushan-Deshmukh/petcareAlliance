import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Searchbar } from './Searchbar'
import { TbClockPlus } from 'react-icons/tb'
export const Activity = () => {

const[timetable,setTimeTable]=useState(
  {
  
  activityStart:'',
  activityEnd:'',
  daily:'',
  pets:[],
  activities:[{start:'',end:'',daily:'',expiry:'',note:''}]
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






<div className='border w-[30%] h-full rounded-md flex items-center flex-col'>
Start
<input type="time" id="appt" name="activityStart" onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/>
End
<input type="checkbox" id="appt" name="daily"  onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/>
<input type="time" id="appt" name="activityEnd" onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/>

    <h1>Select pet</h1>
<div className='flex  gap-1 justify-center items-center h-[10%]'>
  {pets.map(item=><img src={item.src} onClick={addPets} alt="" className={`${timetable.pets.includes(item.src) &&'border-2 border-red-500 '} rounded-full w-[23px] h-[23px]`} />  
)}

</div>
Start
<input type="time" id="appt" name="appt"/>
End
<input type="time" id="appt" name="appt"/>
<input type="radio" name="" id="" /><label>Daily</label>
Expiry<input type="time" id="appt" name="appt"/>
note
<textarea name="" id=""></textarea>




</div>
<div className='border w-[50%] h-full rounded-md'>
{timetable.activityStart }
{timetable.activityEnd }
{timetable.daily }
{timetable.pets.map((item)=><img src={item} className='rounded-full w-[23px] h-[23px]' />) }


</div>



</div>



        
        </motion.div>
  )
}
