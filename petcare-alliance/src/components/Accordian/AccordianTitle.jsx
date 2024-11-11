import React from 'react'
import { useAccordianContext } from "./Accordian";
export const AccordianTitle = ({id,children}) => {
    const { toggle } = useAccordianContext();
  return (
    <h3 onClick={()=>toggle(id)}>{children}</h3>
  
  )
}
