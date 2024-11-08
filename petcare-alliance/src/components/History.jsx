import { motion } from 'framer-motion'
import React from 'react'
import { Searchbar } from './Searchbar'

export const History = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  //Specified Exit animation
    exit={{ opacity: 0, y: 0 }} className=' h-[92%]  w-full'>
<div className='h-[5%] w-full '>
<Searchbar/>

</div>


<div>

  filter by pet,service,date,serive type,status  ,sort by date , count icon, select or select all print
petname,service name-pic,date-s,e-date,service type,note,open icon,archive,status

</div>

    </motion.div>
  )
}
