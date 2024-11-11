import React, { createContext, useContext, useState } from "react";
import { AccordianItem } from "./AccordianItem";
import { AccordianTitle } from "./AccordianTitle";
import { AccordianContent } from "./AccordianContent";
const AccordianContext = createContext();
export function useAccordianContext() {
  const cont = useContext(AccordianContext);

  if (!cont) {
    throw new Error(
      "accordian-related components must be wrapped by <Accordian></Accordian>"
    );
  }
  return cont;
}

export const Accordian = ({ style, children }) => {
  const [openItemId, setOpenItemId] = useState();
function toggle(id){
    setOpenItemId(prev=>prev===id?null:id)
}


  const contextValue = {
    openItemId,
    toggle
  };

  return (
    <AccordianContext.Provider value={contextValue}>
      <div className={style}>{children}</div>
    </AccordianContext.Provider>
  );
};

Accordian.Item=AccordianItem

Accordian.Title=AccordianTitle
Accordian.Content=AccordianContent