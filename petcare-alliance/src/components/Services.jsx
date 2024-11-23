import React from 'react'
import { Link } from 'react-router-dom';
import { BsCalendarHeart } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { TbHealthRecognition } from 'react-icons/tb';
export const Services = () => {
    const services = [
        {
          id: 1,
          title: "Pet Sitting",
          icon: "https://media.istockphoto.com/id/1367150296/photo/happy-young-african-american-man-petting-his-dog-outdoors-in-nature.jpg?s=612x612&w=0&k=20&c=HZT5V05AdmWbcUjeoYcJypF_20VYII8vv6iXxb2gJCg=",
          description: "Reliable care for your pets while you're away.",
       
          actionUrl: "/application/service/knowmore/1",
        },
        {
          id: 2,
          title: "Grooming",
          icon: "https://imgmedia.lbb.in/media/2024/04/6630caf85d67e23ab32393d0_1714473720677.jpg",
          description: "Professional grooming services for all pets.",
    
          actionUrl:"/application/service/knowmore/2",
        },
        {
          id: 3,
          title: "Walking",
          icon: "https://fetchpetcare.com/wp-content/uploads/2023/10/Untitled-design-12.jpg",
          description: "Daily walks to keep your pets healthy and happy.",
         
          actionUrl:"/application/service/knowmore/3",
        },
        {
          id: 4,
          title: "Training",
          icon: "https://dogventurehq.com/wp-content/uploads/2024/03/Dog-training-service-in-Dubai-2.jpg",
          description: "Expert training for your pet’s obedience and tricks.",
      
          actionUrl: "/application/service/knowmore/4",
        },
        {
          id: 5,
          title: "Medical Assistance",
          icon: "https://getodie.com/wp-content/uploads/2020/12/28-992x558-1.jpg",
          description: "Veterinary care for all health-related needs.",
     
          actionUrl: "/application/service/knowmore/5",
        },
      ];
      
      const categories=[
{
    name:'Daily Care',
icon:  <BsCalendarHeart fontSize={20} className='ml-1 mt-1 mb-1' /> 
},
{
    name:'Health Care',
    icon: <TbHealthRecognition fontSize={25} />

},
{
    name:'Specialized Services',
    icon:  <RiServiceLine  fontSize={25} />
}

      ]
  return (
   <>
  
<h1 className='text-center font-semibold text-md text-slate-500'>Popular Services</h1> <br />
<div className='flex items-center justify-center gap-3 w-full h-[35%] bg-white mb-3'>

{services.map((item)=><div className='h-full w-[15%] border shadow-md rounded-md '>
  <img className='rounded-tr-md rounded-tl-md h-[65%] w-full object-cover object-center' src={item.icon} alt="" />
  
  <h2 className='text-slate-600 font-semibold text-sm text-center'>{item.title}</h2>
  <div className='text-slate-400 font-normal text-sm p-1'>{item.description}</div>
  
  <div className='flex justify-between pl-1 pr-1 items-end'>

  <button className='bg-orange-400 rounded-sm text-sm   w-[40%] h-[25px] text-slate-100  hover:bg-green-500  '>Book now</button>    
  
  <Link to={`/application/service/knowmore?name=${item.id}`}>
  
  <span className='text-slate-400  text-[12px] hover:text-green-500 hover:cursor-pointer '>know more</span>
  
  </Link>
  
  
  {/* </Link> */}
  


  </div>
   </div>)}

</div>

<h1 className='text-center font-semibold text-md text-slate-500'>Service Categories</h1> <br />
<div className='flex items-center justify-center gap-3 w-full h-[21%] bg-white'>
{categories.map((item)=><div className='h-full w-[30%] border shadow-md rounded-md '>
  {/* <img className='rounded-tr-md rounded-tl-md h-[65%] w-full object-cover object-center' src={item.icon} alt="" /> */}
{item.icon}
  <h2 className='text-slate-600 font-semibold bg-slate-50 text-center'> {item.name}</h2>
  <div className='text-slate-400 font-normal text-sm p-1  h-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis?ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis?ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis?</div>
  
  <div className='flex justify-center pl-1 pr-1 items-end'>

    
  
  <Link to={`/application/service/knowmore?name=${1}`} className='bg-orange-400 rounded-sm text-sm   w-[30%] h-[25px] text-slate-100  hover:bg-green-500 grid place-content-center '>
 Know more
  </Link>
  
  

  


  </div>
   </div>)}


   
</div>
</>
  )
}

