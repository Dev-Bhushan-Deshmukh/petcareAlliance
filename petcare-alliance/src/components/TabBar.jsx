import React, { useState } from 'react'
import { IoMdListBox } from 'react-icons/io'
import { MdPets } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export const TabBar = () => {

const[tabName,setTabName]=useState('pet')

  return (
    <div className='h-[5%] w-[100%]   flex items-center gap-2 '>
        <Link to='/application/profile/petdetail' className={`h-[80%] w-[10%] ${tabName=='pet' && 'border-b-2'}  border-blue-600`} onClick={()=>setTabName('pet')}>
        <motion.div 
        
        className='flex items-center justify-center gap-5 '> <MdPets /> My pet</motion.div> </Link>
        <Link to='/application/profile/History' className={`h-[80%] w-[10%] ${tabName=='history' && 'border-b-2'}  border-blue-600`} onClick={()=>setTabName('history')}>
           <motion.div className='flex items-center justify-center gap-5'> <IoMdListBox />History</motion.div> </Link>

    </div>
  )
}
