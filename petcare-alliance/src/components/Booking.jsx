import React from 'react'
import x from './bd.pdf'
import { TabBar } from './TabBar'
import { Outlet } from 'react-router-dom'
import { SiPetsathome } from "react-icons/si";
import { RiServiceLine } from "react-icons/ri";
export const Booking = () => {


  const tabData={
    tabOption:['Agency','Book'],
    links:[{href:'/application/service/booking/agency' ,icon:<SiPetsathome />,name:'Agency'},
  
      {href:'/application/service/booking/bookservice',icon:<RiServiceLine />,name:'Book '}
       
        ]

  }

  return (
    <div className='w-full h-full'>

<TabBar tabData={tabData}/>

<Outlet/>




    </div>
  )
}
{/*  
    <iframe className=""  
                src=
"https://gwipp.gwu.edu/sites/g/files/zaxdzs6111/files/downloads/Working_Paper_044_Governance.pdf"
            width="50%" height="100%">
        </iframe> */}