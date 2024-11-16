import React from 'react'
import { Breadcrump } from './Breadcrump'
import { TabBar } from './TabBar'
import { AnimatePresence } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import { MdOutlineSchedule } from 'react-icons/md'
import { VscTable } from "react-icons/vsc";
import { TbHealthRecognition } from 'react-icons/tb'


export const Schedule = () => {
    const tabData={
        tabOption:['activity','routine','healthcheckup'],
        links:[{href:'/application/schedule/activity' ,icon:<MdOutlineSchedule />,name:'Activity'},
          {href:'/application/schedule/routine',icon:<VscTable />,name:'Routine'},
          {href:'/application/schedule/healthcheckup',icon:<TbHealthRecognition />,name:'Healthcheckup'}
           
            ]
    
      }


  return (
    <div className='h-full w-full  '>


    <Breadcrump/>


    <TabBar tabData={tabData}/>
  <AnimatePresence>

  <Outlet />
  </AnimatePresence>
    </div>
  )
}
