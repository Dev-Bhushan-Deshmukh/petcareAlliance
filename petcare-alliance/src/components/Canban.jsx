import React, { useEffect, useState } from 'react'
import { tasks } from '../Data/data'

import { AddNewTaskCanban } from './AddNewTaskCanban';
export const Canban = () => {
    const[taskList,setTaskList]=useState([])
const[columns,setColumns]=useState([])
useEffect(()=>{
setTaskList(tasks)
setColumns([...new Set(tasks.map(item=>item.status))]);
},[])
const moveStatus=(id,toMoveStatusName)=>{

let tempTask=[...taskList];


console.log(tempTask.findIndex((item)=>item.id==id))


  tempTask[tempTask.findIndex((item)=>item.id==id)].status=toMoveStatusName;
  console.log(tempTask)

//   tempTask[tempTask.findIndex((item)=>item.title==title)].status=toMoveStatusName;
  setTaskList(tempTask)

}

function AddNewTaskCanbann(newItem){

    console.log(newItem)
const tempTask=[...taskList];
console.log(tempTask)
tempTask.push(newItem);
console.log(newItem)
setTaskList(tempTask);

}

  return (
           
   
    <div className='border-2 w-full h-full border-slate-100 flex   p-4 m-auto'>


{columns.map((item)=><div key={item} className='flex-1 flex flex-col gap-3 border-2 p-2 border-slate-100'> <b>
    {item}
    </b>


    <AddNewTaskCanban  AddNewTaskCanbann={AddNewTaskCanbann} status={item} />


{taskList.filter((items)=>items.status==item).map((item_)=><div key={item_.id} className='w-full h-[50px] bg-slate-100'> {item_.title} -{item_.id}


<div className='w-full flex gap-1 justify-between'>

{columns.map((item)=>item_.status!==item && <button key={item} className='bg-black rounded-md flex-1 text-white' onClick={()=>moveStatus(item_.id,item)}>{item}</button>)}
  
</div>

  
</div>)}






</div>)}

    </div>
  )
}


// 🔧 Suggested Enhancements
// 1. Color-coded Cards by Status
// Use a color scheme to visually differentiate task statuses (e.g., To Do = Blue, Done = Green).

// 2. Task Card Styling
// Improve spacing, padding, border-radius, and shadows for more visually appealing cards.

// 3. Framer Motion Animations
// Add entry/exit animations when tasks are added or moved using framer-motion.

// 4. Drag & Drop Functionality
// Enable reordering tasks and moving them across columns with drag-and-drop libraries:

// @hello-pangea/dnd

// react-beautiful-dnd

// 5. Modal for Task Details
// Click a task to open a modal displaying:

// Task Title

// Status

// Description / Notes

// Due Date

// Edit & Save options

// 6. Persist Tasks using localStorage
// Save tasks to localStorage so the data stays after refresh.

// 7. Search & Filter Tasks
// Add an input box to search tasks by title or filter by status.

// 8. Progress Indicator
// Show a small progress bar or count:

// "3/10 tasks done"

// Column-level progress % for each status

// 9. Tagging / Labels
// Allow tags like #urgent, #bug, #feature, and filter by them.

// 10. Assign Users to Tasks
// Add basic user profiles and let users assign themselves to tasks.

// 11. Timeline View (Bonus)
// Create an alternate view where tasks are visualized on a horizontal timeline based on due dates or creation.

