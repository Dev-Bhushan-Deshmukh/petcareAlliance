import React from 'react'
import { useSelector } from 'react-redux'

export const BillInvoice = ({setPopUp}) => {
    const count = useSelector((state) => state.invoice)
   const total=count.reduce((a,b)=>{return a+=b.total},0)
  return (
    <div className='w-[50%] h-[300px] border-4 border-slate-700 bg-white  absolute top-0 left-20'>BillInvoice
    
    <div onClick={()=>setPopUp(false)}>close</div>
    <table>
<th><td>product</td>
<td>Price</td>
<td>Quantity</td>
<td>total</td>
</th>
{

count.map((item)=><tr>


<td>{item.name}</td>
<td>{item.price}</td>

<td>{item.quantity}</td>
<td>{item.total}</td>

</tr>)

}





    </table>
    TOtal Items:{ count.reduce((a,b)=>{return a+=b.quantity},0)}
    TOtal Bill:{ total}
    
    Tax added :{total+100}
    discounted Amount:{total-50}
    </div>
  )
}
