import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {increaseQuantity,decreaseQuantity} from '../slices/invoices'
export const InvoiceContainer=({setPopUp})=>{
     const dispatch = useDispatch()
const[inovices,setInvoices]=useState([]);
const count = useSelector((state) => state.invoice)
console.log(count)
useEffect(()=>{
setInvoices(count);

},[])


 const updateItems=(option,id)=>{

if(option==="+"){


    dispatch(increaseQuantity(id))

}
else{

    dispatch(decreaseQuantity(id))
}
// setinvoicItems(temp);

}



return (

    <div className='bg-slate-100 w-[40%] h-[50%] border-1 text-white border-slate-300'>
<h1>
Invoice container</h1>
{count.map((item)=><div key={item.id}className="flex justify-between p-1 w-full h-[40px] bg-slate-900  rounded-md text-white"
            >
    
    
    
    {item.name} 





<div className='flex items-center justify-between p-1 w-[200px] bg-green-700 rounded-md'>
<button onClick={()=>updateItems("-",item.id)}  >-</button>
<span>
{item.quantity}


       </span>
<button onClick={()=>updateItems("+",item.id)}>+</button></div>




</div>)}


<div onClick={()=>setPopUp(true)}>see invoice</div>
</div>
)


}