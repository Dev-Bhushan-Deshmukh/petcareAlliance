import React from 'react'
import { hierarchy } from '../Data/data'
import { BoardItem } from '../components/BoardItem'
export const Board = () => {
    
  return (
    <div className="h-[100%] w-full overflow-y-scroll ">
        <h1>Management</h1>

        {
hierarchy.map(item=><BoardItem item={item} />)







        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
  )
}
