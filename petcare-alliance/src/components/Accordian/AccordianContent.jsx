import React from 'react'
import { useAccordianContext } from "./Accordian";
export const AccordianContent = ({id,children}) => {
    const { openItemId } = useAccordianContext();
    const isOpen=openItemId===id
    console.log(isOpen,'--------',openItemId,'------',id)
    
  return (
    <div className={isOpen ? 'block':'hidden'}>
    {children}
    </div>
  )
}
