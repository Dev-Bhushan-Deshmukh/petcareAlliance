import React, { useState } from 'react'
import { IoMdListBox } from 'react-icons/io'
import { MdPets } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
export const TabBar = ({tabData}) => {




const[tabName,setTabName]=useState(tabData.tabOption[0])

  return (
    <div className='h-[5%] w-[100%]   flex items-center gap-2 '>
{tabData.links.map((item,index)=>   <Link to={item.href} key={index} className={`h-[80%] w-[10%] ${tabName==item.name && 'border-b-2'}  border-blue-600`} onClick={()=>setTabName(item.name)}>
        <motion.div 
        
        className='flex items-center justify-center gap-5 '> {item.icon}{item.name}</motion.div> </Link>)}



    </div>
  )
}
