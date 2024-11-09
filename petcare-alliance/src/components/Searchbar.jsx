import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { motion,AnimatePresence } from 'framer-motion';
export const Searchbar = ({width}) => {
const[inputArray,setInputArray]=useState([]);
    const[currentElement,setCurrentElement]=useState('')
const[listFocus,setlistFocus]=useState(false)
    const listRef = useRef(null)
   const  inputRef = useRef(null)

   

    useEffect(()=>{

inputArray.length==0 && inputRef.current.focus();


    },[inputArray])
      

    function removeItem(index){


        let staggedarray=[...inputArray]
        staggedarray.splice(index,1);
        setInputArray(staggedarray);
    }
function callFUnc(e){
    setlistFocus(true)
    console.log(e.key)
    if (e.key === 'Enter') {
let staggedarray=[...inputArray,e.target.value]
// scrollToBottom()
setInputArray(staggedarray);
setCurrentElement('')
        e.target.value=null
        console.log('do validate');
      }
   
}


function removeItem_(e){
    // listRef.current.focus()
    listRef.current.focus()
    console.log(e.key,'close keuy');
    if(e.key=='Backspace')  
    {

        let staggedarray=[...inputArray]
        staggedarray.pop();
        setInputArray(staggedarray);



    }
}



  return (
  


<div className={` w-[${width}%] h-[100%] rounded-md justify-center flex border border-gray-200 bg-white `}>



<div tabindex="0"  onKeyDown={removeItem_} ref={listRef} className={` ${inputArray.length ? 'w-[50%] p-1' :'w-[0%] p-0' } outline-red-200  h-full  flex gap-2 items-center overflow-x-auto`}>

{inputArray.map((item,index)=>
<AnimatePresence>


<motion.div






initial={{
    opacity: 0,
    scale: 0.75,
}}
animate={{
    opacity: 1,
    scale: 1,
    transition: {
        ease: "easeOut",
        duration: 0.15,
    },
}}
exit={{
    opacity: 0,
    scale: 0.75,
    transition: {
        ease: "easeIn",
        duration: 0.15,
    },
}}








key={item} className='min-w-[40%] w-fit h-[80%] bg-slate-50 rounded-lg flex items-center justify-between p-1 text-slate-400 uppercase'>{item} <IoMdClose color='red' onClick={()=>removeItem(index)} /></motion.div>

</AnimatePresence>


)}
   {listFocus && <span>|</span>} 
</div>


<input type="text" ref={inputRef} placeholder='Enter items' className='flex-1 rounded-md placeholder:text-slate-200 pl-2 outline-slate-100 text-slate-500 font-semibold' onKeyDown={callFUnc} />
</div>

   
  )
}


//focus on lastly added element
