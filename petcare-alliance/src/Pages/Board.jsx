import React, { useEffect, useState } from 'react'
import { hierarchy, poll } from '../Data/data'
import { BoardItem } from '../components/BoardItem'
import { AnimatePresence, motion } from 'framer-motion';
import { HiUserGroup } from "react-icons/hi2";
import { Canban } from '../components/Canban';
import { AutoComplete } from '../components/AutoComplete';
import { StartRatings } from '../components/StartRatings';
import { Invoice } from '../components/Invoice';
import { Toast } from '../components/Toast';

import { newNotification } from '../slices/notification';
import { useDispatch } from 'react-redux';
import { TypingIndicator } from '../components/TypingIndicator';
import { BellNotifications } from '../components/BellNotifications';
export const Board = () => {
    const dispatch=useDispatch();
useEffect(()=>{
  setTimeout(() => {
    dispatch(newNotification({id:`${new Date().getSeconds()}`,name:'board',message:'Board notification arrived'}))
  }, 3000);




},[]);



  const[pollState,setPollState]=useState({  question:null,
    options: [
    
    ],
    totalVotes:null})
const[active,setActive]=useState(null);
    useEffect(()=>{

      setPollState(poll)


    },[])

// vote function for Poll component


function vote(id,index){
const tempPoll={...pollState};
tempPoll.totalVotes +=1;
tempPoll.options[index].votes +=1;

console.log(tempPoll)
setActive(id)
setPollState(tempPoll);

}

  return (
    <div className="h-[100%] w-full overflow-y-scroll ">
        <h1>Management</h1>

        {
hierarchy.map(item=><BoardItem item={item} key={item.id} />)
 }
      <h2 className='m-auto'>Vote Poll</h2>
<div className='border-2 border-slate-100  w-fit p-4 m-auto'>
  <p>{pollState.question}</p>
        {
pollState.options.map((question,index)=>
<div key={question.id}    className={`w-[400px] flex flex-col items-center justify-between p-2 ${active==question.id ?'bg-orange-500':'bg-slate-900'}  text-white rounded-md h-[50px] m-1`}
onClick={(e)=> !active && vote(question.id,index)}
>
<div className='w-[100%]  flex justify-between items-center' ><span >{question.text}</span>    {active &&  <span>{( (question.votes /pollState.totalVotes)*100).toFixed(1)}%</span>}</div>
{active &&   <AnimatePresence>
 <motion.div 
//  initial={{display:'none'}} 
initial={{ opacity: 0, scale: 0.75 }}
  animate={{ opacity: 1, scale: 1  ,
    transition: {
    type: "tween",
    duration:0.40,
    ease: "circOut",

 }}} 
  className='bg-slate-100 h-[10px] w-[100%] rounded-full'>
  <motion.div
        className='bg-green-500 h-full w-[20%] rounded-full'
        initial={{width:'0%'}}
        animate={{
         
          width: active && `${( question.votes /poll.totalVotes)*100}%`,
          transition: {
            type: "tween",
            duration:1.7,
            ease: "circOut",
          },
        }}  >

        </motion.div>


</motion.div>
</AnimatePresence>
}
</div>)
        }
          <div className='flex items-center '><HiUserGroup size={20} />:<span>{pollState.totalVotes}</span></div>
        
        
        
        </div>
        






        {/* <Canban/> */}

        {/* <AutoComplete/> */}
{/* <StartRatings/> */}
{/* <Invoice/> */}

{/* <TypingIndicator/> */}
<BellNotifications/>
        </div>

  )
}


// Reusable UI Components
// Button

// Modal / Dialog Box

// Tooltip

// Accordion

// Tabs

// Toast Notifications

// Carousel / Image Slider

// Dropdown

// Pagination

// Progress Bar

// Stepper (Multi-step Forms)

// 📋 Forms & Input Components
// Input Fields (Text, Password, Email)

// Textarea

// Checkbox / Radio Buttons

// Toggle / Switch

// Date Picker

// Time Picker

// File Upload 

// Search Bar with Suggestions

// Multi-select Dropdown done

// Auto-complete Input failed

// 📊 Data Display Components
// Tables (with sorting, filtering, pagination)

// Cards (Info / Profile / Product)

// Charts & Graphs (Bar, Line, Pie)

// Data Grids

// Activity Timeline

// Lists with Filters and Actions

// Badge / Chips / Tags

// 📅 Utility & Functional Components
// Calendar

// Scheduler

// Task Manager (To-do list / Kanban)

// Countdown Timer

// Clock / Stopwatch

// Rating Component (Stars / Emojis) -done

// Clipboard Copy Component

// Code Block Display (with syntax highlighting)

// 👤 User/Account Interface Components
// Login / Signup Forms

// User Profile Card

// Avatar Upload

// User Settings Panel

// User Role Management Table

// Two-factor Auth UI

// 🧾 Business & E-commerce Components
// Product Card

// Shopping Cart

// Checkout Form

// Payment Modal (Stripe/PayPal UI)

// Invoice Generator

// Order History List

// Inventory Table

// Sales Dashboard (KPIs, trends)

// 🗺️ Navigation Components
// Navbar / Appbar

// Sidebar

// Breadcrumbs

// Mega Menu

// Drawer (Slide-out panel)

// Route-based Tab Navigation

// 💬 Communication & Interaction Components
// Chat UI / Messenger

// Comment Box with Replies

// Notifications Panel

// Email Preview Component

// Contact Form

// 📦 Admin & Dashboard Components
// Analytics Panel

// User Management Table

// Permission Control Interface

// Logs Viewer

// Theme Switcher (Light/Dark)

// Status Indicators (Success, Warning, Error)

// 🎮 Creative / Fun / Media
// Meme Generator

// Sketch Canvas

// Audio Player

// Video Player

// Music Playlist UI

// Interactive Quiz

// Poll & Voting Component -done

