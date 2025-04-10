import React, { useEffect, useState } from 'react'
import '.././styles/table.css'
import { CiSearch } from 'react-icons/ci';
import { retry } from '@reduxjs/toolkit/query';
import { distributors,data, distributorNames, statuses } from '../Data/data';
export const Developement = () => {

 
const[dataSet,setDataSet]=useState([]);
const[dataSetCopy,setDataSetCopy]=useState([]);
const [selectList,setSelectList]=useState([])
const[selectedItem,setselectedItem]=useState()
const[statusCount,setstatusCount]=useState({
    Active: null,
    Inactive: null,
    Pending: null,
    Suspended: null,
    Blacklisted: null
  })
useEffect(()=>{

setDataSet(data)
setDataSetCopy(data)
setSelectList(distributors)
let staggedStatusCount={...statusCount}
for(let i of statuses){
    staggedStatusCount[i]=distributors.filter(item=>{return  item.status==i}).length;



}

setstatusCount(staggedStatusCount)

},[])
// console.log('rama'.includes('ra'))

function  filterTable(e){
// console.log('called')
const id=e.target.value;
if(id.length==0){

    setDataSet(dataSetCopy);
    return
}else{
   
    // if(id.length==5){
        console.log('called')
const filteredArray=dataSetCopy.filter((item)=>{return String(item.id).includes(id) && item.role=="Admin"} )
console.log('filteredArray',filteredArray)
filteredArray.length>0 &&  setDataSet(filteredArray)
}
    // }

}

// const statusCount = {
//     Active: null,
//     Inactive: null,
//     Pending: null,
//     Suspended: null,
//     Blacklisted: null
//   };
  
function collectStats(e){
console.log(e.target.value)
setselectedItem(e.target.value)
console.log(e.target.value)
let staggedStatusCount={...statusCount}
if(e.target.value=='all distributors'){
    for(let i of statuses){
        staggedStatusCount[i]=distributors.filter(item=>{return  item.status==i}).length;
    
    
    
    }

}else{
    for(let i of statuses){
        staggedStatusCount[i]=distributors.filter(item=>{return item.distributorName==e.target.value && item.status==i}).length;
    
    
    
    }

}

setstatusCount(staggedStatusCount)
// console.log(x)


// const distributorStatusActive=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Active'}).length;
// const distributorStatusInactive=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Inactive'}).length;



// const distributorStatusPending=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Pending'}).length;


// const distributorStatusSuspended=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Suspended'}).length;


// const distributorStatusBlacklisted=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Blacklisted'}).length;



// console.log(distributorStatusActive,distributorStatusInactive,distributorStatusPending,distributorStatusSuspended,distributorStatusBlacklisted)


}
  return (
    <div className='h-[100%] w-full overflow-y-scroll'>

        
        <div 
        className={`flex  cursor-pointer w-[30%] h-[7%] items-center gap-3 mt-1  pl-1 pr-1 bg-slate-800 rounded-md`}
        >
        <CiSearch 
         fontSize={20} />
         <input 
         onChange={(e)=>filterTable(e)}
         className='h-[80%] flex-1 text-white bg-[#0000] outline-none' 
         placeholder='Search...' 
         type="text" 
         />
        
        </div>




        <div className='overflow-x-auto h-[80%] mt-1 w-full'> 
        <table>
            <thead>
            <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
            </thead>

  <tbody>
  {dataSet.map((item,index)=>  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name} </td>
    <td>{item.role}</td>
  </tr>)}

  </tbody>
 
  </table>

        </div>

        
        
        
        <span>Story 2</span>

        <div className='h-[50%] w-[40%] mb-4 rounded-md bg-white border-slate-200 p-2  border-2'>
   <select className='w-full h-10  rounded-md bg-slate-600 text-white border-slate-200  border-2' value={selectedItem} onChange={(e)=>collectStats(e)}>
    <option value="all distributors" >All distributors</option>
   
{
    distributorNames.map((item)=><option value={item}>{item}</option>)
}

   </select>

{statuses.map((item)=><div className='flex justify-between items-center w-full h-10 bg-slate-800 text-white mt-1 px-3 rounded-md'><span>{item}</span> <span>{statusCount[item]}</span> </div>)}



        </div>
        
        
        
        
        
        </div>
  )
}
