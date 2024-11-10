import React from 'react'
import { motion } from 'framer-motion'
export const HealthCheckup = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  //Specified Exit animation
    exit={{ opacity: 0, y: 0 }} className=' h-[85%]  w-full bg-slate-50'>HealthCheckup</motion.div>
  )
}
