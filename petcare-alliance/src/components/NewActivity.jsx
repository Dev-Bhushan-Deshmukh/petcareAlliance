import React, { useState } from 'react'


import { PiListHeart } from "react-icons/pi";

import { pets } from '../Data/data';

import { ActivityCard } from './ActivityCard';
export const NewActivity = () => {


    const[timetable,setTimeTable]=useState(
        {
        
        activityStart:'',
        activityEnd:'',
        daily:'',
        pets:[],
        activities:{name:'',start:'',end:'',daily:'',expiry:'',note:'',icon:'morning'}
      })
      
      const[activityList,setActivityList]=useState([]);
      const pushActivity=()=>{
      let tempActivityList=[...activityList];
      tempActivityList.push(timetable);
      console.log(tempActivityList,'xx')
      setActivityList(tempActivityList)
      // setTimeTable(
      //   {
        
      //   activityStart:'',
      //   activityEnd:'',
      //   daily:'',
      //   pets:[],
      //   activities:{name:'',start:'',end:'',daily:'',expiry:'',note:'',icon:'morning'}
      // })
      setTimeTable(prev=>({...prev,activities:{...prev.activities,['name']:'',['start']:'',['end']:'',['daily']:'',['note']:''}}))
      }
      
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
<div className=' w-full h-[70%] flex justify-between pl-2 pr-2'>






<div className='border w-[30%] h-full rounded-md  '>

  
<h1 className='pl-3 font-semibold  mb-2 rounded-md '>New activity schedule</h1>
<div className=' w-full flex gap-3 p-1 justify-start items-center pl-3  '>
<label className='w-[20%]'>From</label>
<input type="date" id="appt" name="activityStart" className='border  rounded-md' onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/>


</div>
<div className=' w-full flex gap-3  p-1 justify-start items-center pl-3  '>
<label htmlFor=""className='w-[20%]'>To</label>
<input type="date" id="appt" name="activityEnd" disabled={timetable.daily}   className={`border  rounded-md `} onChange={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.value}))}/>


<input type="checkbox" id="appt" name="daily"  onClick={(e)=>setTimeTable(prev=>({...prev,[e.target.name]:e.target.checked ?e.target.name:null}))}/> 

<label htmlFor="" >Recuring</label>
</div>
<div className=' w-full flex gap-3   p-1justify-start items-center pl-3  '>
<label className='w-[20%]'>Repeat</label>
<select name="" id=""></select>
</div>

    <h1 className='pl-3 font-semibold bg-slate-50'>Select pet</h1>
<div className='flex   gap-1 pl-3 justify-start items-center h-[10%]  '>
  {pets.map(item=><img src={item.src} onClick={addPets} alt="" className={`${timetable.pets.includes(item.src) &&'border-2 border-red-400 '} rounded-full w-[28px] h-[28px]`} />  
)}

</div>

<h1 className='pl-3 font-semibold bg-slate-50 mb-2'>Activity</h1>

<div className=' pl-3 h-[45%]  justify-center flex flex-col gap-5   '>
<div className='flex gap-3'><label htmlFor="" className='w-[20%]'>Name</label> <input type="text"   className='border w-[50%] rounded-md' name='name' value={timetable.activities.name} onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}/></div>
<div className='flex gap-3'><label htmlFor=""className='w-[20%]'>Start</label>
<input type="time" id="appt"  className='border rounded-md' name="start"  value={timetable.activities.start}  onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}/></div>

<div className='flex gap-3'><label htmlFor=""className='w-[20%]'>End</label>
<input type="time" id="appt" name="end"  className='border rounded-md' value={timetable.activities.end}  onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}/></div>
<div className='flex gap-3'>

  <label htmlFor=""className='w-[20%]'>Till</label><input value={timetable.activities.expiry} className={`border rounded-md text-slate-500 text-center `} disabled={timetable.activities.daily} type="date" id="appt" name="expiry"  onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}/>

<input type="checkbox" name="daily" id="" value={true} checked={timetable.activities.daily && true}  onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.checked ?e.target.name:null}}))} />
<label>Daily</label>
</div>

<div className='flex gap-3'>
<label htmlFor=""className='w-[20%]'>Note</label>
<input  id="" className='border rounded-md w-[50%]' value={timetable.activities.note} name='note' onChange={(e)=>setTimeTable(prev=>({...prev,activities:{...prev.activities,[e.target.name]:e.target.value}}))}></input>
</div>


</div>

<div className='flex gap-3 items-center h-[6%] pl-3 '>

< button className='w-[45%] h-[95%] bg-blue-600 rounded-md text-slate-50' onClick={pushActivity}>Add</button> < button  className='w-[45%] h-[95%] bg-slate-100 border rounded-md text-slate-400'>Clear</button>
</div>





</div>
<ActivityCard timetable={timetable} activityList={activityList} />



</div>
  )
}
