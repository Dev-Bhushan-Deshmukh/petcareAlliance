import React, { useEffect, useState } from 'react'
import { hierarchy, poll } from '../Data/data'
import { BoardItem } from '../components/BoardItem'
import { AnimatePresence, motion } from 'framer-motion';
import { HiUserGroup } from "react-icons/hi2";
import { Canban } from '../components/Canban';
export const Board = () => {
    
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



 }}}  className='bg-slate-100 h-[10px] w-[100%] rounded-full'>

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
        }}

    

      ></motion.div>


</motion.div>
</AnimatePresence>

}

</div>)

        }
        
        
        
        <div className='flex items-center '><HiUserGroup size={20} />:<span>{pollState.totalVotes}</span></div>
        
        
        
        </div>
        






        <Canban/>



        </div>
  )
}
