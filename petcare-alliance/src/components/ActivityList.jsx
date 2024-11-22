import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ActivityCard } from './ActivityCard';
export const ActivityList = () => {
const dispatch=useDispatch();
  const activityList=useSelector((state)=>state.activity.value)
  console.log(activityList);
  return (
    <div className=' w-full h-[70%]   flex gap-3 flex-wrap pl-2 pr-2 overflow-x-auto'>
      
      
      {activityList.map((timetable)=>    <ActivityCard timetable={timetable} />)}
      
      
      
      
      </div>
  )
}
