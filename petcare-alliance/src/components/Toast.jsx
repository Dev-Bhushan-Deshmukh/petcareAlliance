import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion';
import { expireNotification } from '../slices/notification';
export const Toast = () => {

const dispatch=useDispatch();
const notifications=useSelector((state)=>state.toast);
console.log("notifications --->",notifications)
const[visible,setVisible]=useState(false);

useEffect(()=>{
    setVisible(true)
const myTime=setTimeout(() => {
    setVisible(false)
}, 10000);
return ()=>clearTimeout(myTime)

},[notifications])
useEffect(()=>{
const myInterval=setInterval(() => {
    dispatch(expireNotification());
}, 3000);

return ()=>clearInterval(myInterval)
},[])

  return (
    visible && <div className='w-[300px] z-20 bg-green-400   absolute bottom-0 right-0 h-[50%]'>Notifications
    
    {notifications.map((NotificationItem)=>
    
    <AnimatePresence>

   
    <motion.div
    
    
    initial={{
        opacity: 0,
    
    }}
    animate={{
        opacity: 1,
     
        transition: {
            ease: "easeOut",
            duration: 0.15,
        },

    
    }}
    exit={{

        opacity: 0,
     
    }}
 
    
    
    
    key={NotificationItem.id} className='bg-orange-500 h-[50px] my-2'>
       <b>{NotificationItem.name}</b> 

<p>{NotificationItem.message}</p>

    </motion.div>
    
    </AnimatePresence>
    )}
    
    
    </div>
  )
}


// 🔧 Where You Shine (🔥)

// Area	Comments
// Routing	Deep nesting of routes like /application/service/booking/agency shows a good grasp of route hierarchy. Nicely done.
// Redux usage	You’re using dispatch() effectively and understand async-like timing behavior.
// UI/UX efforts	Animation with Framer Motion on toasts = great touch. Shows you're thinking about user experience.
// Code readability	Overall readable, consistent JSX. You’re using components well, naming is okay.
// Scalability	You’ve got a good base here that can scale into a real-world pet-care platform or social-style app.
// 🚨 What Can Be Improved

// Area	Suggestions
// Notification handling	Right now, hiding toasts with a single visible state isn’t scalable. Notifications should disappear individually (as we discussed above).
// Toast positioning	Absolute positioning with bottom-0 right-0 may break on small screens. Use z-index, media queries, or consider a portal approach later.
// Hardcoded timeouts	Use config constants (TOAST_DURATION, EXPIRE_INTERVAL) — makes things easier to manage.
// Code organization	Redux logic, notification slice, components — consider moving each into their own folders for real-world projects.
// Error handling	Add fallbacks: what happens if notifications is null or undefined? Handle gracefully.
// Route keys	You’ve used a few paths like /application/profile/petdetail with index:true and explicit path: — may confuse nesting logic. Use either, not both.
