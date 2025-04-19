import React, { useEffect, useRef, useState } from "react";
import ".././styles/table.css";
import { CiSearch } from "react-icons/ci";
import { retry } from "@reduxjs/toolkit/query";
import {
  distributors,
  data,
  distributorNames,
  statuses,
  statusArray,
} from "../Data/data";
import { useDispatch } from "react-redux";
import { newNotification } from "../slices/notification";
export const Developement = () => {
// console.log('rendred')

    const dispatch=useDispatch();
useEffect(()=>{
  setTimeout(() => {
    dispatch(newNotification({id:`${new Date().getSeconds()}`,name:'Developement',message:'Development notification arrived'}))
  }, 3000);




},[]);

  const [dataSet, setDataSet] = useState([]);
  const [dataSetCopy, setDataSetCopy] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const [selectedItem, setselectedItem] = useState();
  const [statusCount, setstatusCount] = useState({
    Active: null,
    Inactive: null,
    Pending: null,
    Suspended: null,
    Blacklisted: null,
  });
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const[statusCheckList,setStatusCheckList]=useState(statusArray)
const[StatusCheckListCopy,setStatusCheckListCopy]=useState(statusArray)
const[activeList,setActiveList]=useState([]);
const inputref=useRef(null)
  useEffect(() => {
    console.log('re rendered')
    setDataSet(data);
    setDataSetCopy(data);
    setSelectList(distributors);

    let staggedStatusCount = { ...statusCount };
    for (let i of statuses) {
      staggedStatusCount[i] = distributors.filter((item) => {
        return item.status == i;
      }).length;
    }

    setstatusCount(staggedStatusCount);
  }, []);

  // table filter function
  function filterTable(e) {
    // console.log('called')
    const id = e.target.value;
    if (id.length == 0) {
      setDataSet(dataSetCopy);
      return;
    } else {
      // if(id.length==5){
      console.log("called");
      const filteredArray = dataSetCopy.filter((item) => {
        return String(item.id).includes(id) && item.role == "Admin";
      });
      console.log("filteredArray", filteredArray);
      filteredArray.length > 0 && setDataSet(filteredArray);
    }
    // }
  }
  // count collection function

  function collectStats(e) {
    console.log(e.target.value);
    setselectedItem(e.target.value);
    console.log(e.target.value);
    let staggedStatusCount = { ...statusCount };
    if (e.target.value == "all distributors") {
      for (let i of statuses) {
        staggedStatusCount[i] = distributors.filter((item) => {
          return item.status == i;
        }).length;
      }
    } else {
      for (let i of statuses) {
        staggedStatusCount[i] = distributors.filter((item) => {
          return item.distributorName == e.target.value && item.status == i;
        }).length;
      }
    }

    setstatusCount(staggedStatusCount);
    // console.log(x)

    // const distributorStatusActive=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Active'}).length;
    // const distributorStatusInactive=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Inactive'}).length;

    // const distributorStatusPending=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Pending'}).length;

    // const distributorStatusSuspended=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Suspended'}).length;

    // const distributorStatusBlacklisted=distributors.filter(item=>{return item.distributorName==e.target.value && item.status=='Blacklisted'}).length;

    // console.log(distributorStatusActive,distributorStatusInactive,distributorStatusPending,distributorStatusSuspended,distributorStatusBlacklisted)
  }

  //  Filter modal functions

function handleCheckBox(e,index){

const tempArr=[...statusCheckList];

if(index==-1){
   tempArr.forEach((item)=>{return item.value=e.target.checked?true:false})
console.log(tempArr)

setStatusCheckList(tempArr)
}else{

    tempArr[index].value=!tempArr[index].value;
    setStatusCheckList(tempArr)
}


console.log(tempArr)




}
function handleInput(e){
    const tempArr=[...StatusCheckListCopy];


if(e.target.value==''){

    setStatusCheckList(StatusCheckListCopy)
setActiveList([])
}

else{


const temp=tempArr.filter((item)=>!item.status.toLocaleLowerCase().includes((e.target.value).toLocaleLowerCase())) //non existing
const present=tempArr.filter((item)=>item.status.toLocaleLowerCase().includes((e.target.value).toLocaleLowerCase())) // existing
setActiveList(present);  

present.forEach((item)=>temp.unshift(item))
console.log(temp,"temp")
setStatusCheckList(temp)
    // setStatusCheckList(tempArr.filter((item)=>item.status.toLocaleLowerCase().includes((e.target.value).toLocaleLowerCase()))




}


}

  return (
    <div className="h-[100%] w-full overflow-y-scroll">
      <div className="w-full h-[70%] border-slate-400 bg-slate-50 border-2 overflow-x-scroll">
        <button
          className="bg-slate-500 w-[10%] h-7 text-white"
          onClick={() => setOpenFilterModal((prev) => !prev)}
        >
          Filter
        </button>

        
          <div className="border-slate-400 border-2 w-1/3 absolute bg-white " style={{visibility:openFilterModal ?'visible':'hidden'}}>
          <div >

<input type="text" ref={inputref} className="outline-1 border-2 border-slate-500" name="" onChange={(e)=>handleInput(e)} id="" />  <br />

                <input type="checkbox" checked={statusCheckList.some((item)=>item.value==false)?false:true

                }  name="select All" id="select All" onChange={(e)=>handleCheckBox(e,-1)} />
                <label htmlFor="select All">  {statusCheckList.some((item)=>item.value==false)?'select All':'Unselect All'} </label>
              </div>
            {statusCheckList.map((item, index) => (
              <div  className={`${activeList.includes(item) && 'bg-orange-100'}`} key={index}>
                <input type="checkbox" checked={item.value} name={item.status} id={item.status} onChange={(e)=>handleCheckBox(e,index)} />
                <label htmlFor={item.status}>{item.status}</label>
              </div>
            ))}

            <button className="absolute bottom-0 right-3" onClick={(e)=>{ setOpenFilterModal(false);setActiveList([]); setStatusCheckList(StatusCheckListCopy);inputref.current.value=''}}>X</button>
          </div>
        

          <table>
          <thead>
            <tr>
              <th>distributorName</th>
              <th>status</th>
            
            </tr>
          </thead>

          <tbody>
            {distributors.map((item, index) => (
              <tr key={index}>
                <td>{item.distributorName}</td>
                <td>{item.status} </td>
             
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div
        className={`flex  cursor-pointer w-[30%] h-[7%] items-center gap-3 mt-1  pl-1 pr-1 bg-slate-800 rounded-md`}
      >
        <CiSearch fontSize={20} />
        <input
          onChange={(e) => filterTable(e)}
          className="h-[80%] flex-1 text-white bg-[#0000] outline-none"
          placeholder="Search..."
          type="text"
        />
      </div>

      <div className="overflow-x-auto h-[80%] mt-1 w-full">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody>
            {dataSet.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name} </td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <span>Story 2</span>

      <div className="h-[50%] w-[40%] mb-4 rounded-md bg-white border-slate-200 p-2  border-2">
        <select
          className="w-full h-10  rounded-md bg-slate-600 text-white border-slate-200  border-2"
          value={selectedItem}
          onChange={(e) => collectStats(e)}
        >
          <option value="all distributors">All distributors</option>

          {distributorNames.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {statuses.map((item) => (
          <div
            key={item}
            className="flex justify-between items-center w-full h-10 bg-slate-800 text-white mt-1 px-3 rounded-md"
          >
            <span>{item}</span> <span>{statusCount[item]}</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
