// import React from 'react'

// export const BoardItem = ({item}) => {
//   return (
// <div className='w-fit min-w-[100%] h-fit flex flex-col justify-center items-center border-2 border-slate-400   p-5 text-slate-700'>
    
    
//      <div className={`${item.children && 'border-slate-900 border-b-2'} h-[200px] w-[200px] bg-black`}><b><i>{item.name}-{item.role}</i></b></div>
// <div className='min-w-[100%] overflow-scroll h-fit flex gap-2 min-h-[200px]  text-slate-700'>

// {item.children?.length>0 &&  item.children.map(childItem=><BoardItem item={childItem} />) }

// </div>



// </div>
//   )
// }
import React, { useState } from 'react';




export const BoardItem = ({ item }) => {
    const[show,setShow]=useState(false)
    function showChildren(){
        setShow(prev=>!prev)
    
    
    }
  return (
    <div className="flex flex-col items-center justify-start p-4">
      {/* Node Box */}
      <div className="bg-white text-center shadow-lg rounded-xl border-2 border-gray-300 px-6 py-4 min-w-[220px]" onClick={showChildren}>
        <p className="text-md font-semibold text-slate-800">{item.name}</p>
        <p className="text-sm text-gray-500 italic">{item.role}</p>
      </div>

   
      {item.children?.length > 0 && (
       show &&   <div className="h-5 w-px bg-gray-400 my-2"></div>
        
      )}

 
{item.children?.length > 0 && (
       show &&   <div className="h-px w-full bg-gray-400 my-2"></div>
        
      )}

      {/* Children */}
      {item.children?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6">
          {item.children.map((child, index) => (
        show &&    <BoardItem key={child.id || index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
