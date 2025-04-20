import React, { useEffect, useState } from 'react'
import { FaBell } from "react-icons/fa6";
export const BellNotifications = () => {
  const dummyNotifications = [
    {
      id: 1,
      notification: "Your profile was viewed by 5 people.",
      read: false,
      time: "2 mins ago"
    },
    {
      id: 2,
      notification: "You have a new connection request.",
      read: false,
      time: "5 mins ago"
    },
    {
      id: 3,
      notification: "You were mentioned in a comment.",
      read: false,
      time: "10 mins ago"
    },
    {
      id: 4,
      notification: "New job postings match your profile.",
      read: false,
      time: "15 mins ago"
    },
    {
      id: 5,
      notification: "Your application was viewed by the recruiter.",
      read: false,
      time: "30 mins ago"
    }
  ];
  


  const[notificationList,setNotificationList]=useState(dummyNotifications);
const[newNotification,setNewNotification]=useState(false);
    const [openModal,setOpenModal]=useState(false);


const showNotifications=()=>{
    console.log('clicked')
 
    setOpenModal(prev=>!prev);
}

const markAsRead=(id)=>{
  console.log(id)
const tempNotifications=[...notificationList];

tempNotifications[tempNotifications.findIndex((item)=>item.id==id)].read=true;
setNotificationList(tempNotifications);

}


const pushNotification=()=>{
const temp=[...notificationList];
temp.unshift({   
  id: new Date().getMilliseconds(),
  notification: "New job postings match your profile.",
  read: false,
  time: ` ${new Date().getSeconds()} seconds ago`
})

setNotificationList(temp);

}



useEffect(()=>{
  notificationList.length>0 && setNewNotification(true);

const notificationTimeout=setTimeout(() => {
  setNewNotification(false);
}, 1000);
return ()=>clearTimeout(notificationTimeout);
},[notificationList.length])

  return (
    <div className='w-full h-full'>
<div className='flex items-center justify-between p-2 border-2 border-slate-300 w-[200px]'>     
   <FaBell onClick={()=>showNotifications()} />
    
   {newNotification &&    <span class="relative flex size-3">
 <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
  <span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
</span>  } 
{notificationList.filter((item)=>item.read==false).length>0? notificationList.filter((item)=>item.read==false).length:'no new notification'} </div>
{openModal && <div className='border-2 border-slate-200 w-[300px] h-[400px]'>

{notificationList.filter((item)=>item.read==false).map((item,index)=><div key={item.id} className='p-2 border-2 m-1 rounded-sm bg-slate-900 border-slate-100 text-green-600 '>{item.notification}
<br />
<span className='text-slate-500'>{item.time}</span>
 &nbsp;
 <span className='text-slate-400' onClick={()=>markAsRead(item.id)}> <b>
   mark as read
   </b>
   </span>

</div>)}






</div>
}      



<button onClick={pushNotification}>Push notifications</button>
    </div>
  )
}
