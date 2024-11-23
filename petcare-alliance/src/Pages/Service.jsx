import React from 'react'
import { Breadcrump } from '../components/Breadcrump'
import { Link, Outlet } from 'react-router-dom';

export const Service = () => {




  const services = [
    {
      id: 1,
      title: "Pet Sitting",
      icon: "https://media.istockphoto.com/id/1367150296/photo/happy-young-african-american-man-petting-his-dog-outdoors-in-nature.jpg?s=612x612&w=0&k=20&c=HZT5V05AdmWbcUjeoYcJypF_20VYII8vv6iXxb2gJCg=",
      description: "Reliable care for your pets while you're away.",
   
      actionUrl: "/service/pet-sitting",
    },
    {
      id: 2,
      title: "Grooming",
      icon: "https://imgmedia.lbb.in/media/2024/04/6630caf85d67e23ab32393d0_1714473720677.jpg",
      description: "Professional grooming services for all pets.",

      actionUrl: "/service/grooming",
    },
    {
      id: 3,
      title: "Walking",
      icon: "https://fetchpetcare.com/wp-content/uploads/2023/10/Untitled-design-12.jpg",
      description: "Daily walks to keep your pets healthy and happy.",
     
      actionUrl: "/service/walking",
    },
    {
      id: 4,
      title: "Training",
      icon: "https://dogventurehq.com/wp-content/uploads/2024/03/Dog-training-service-in-Dubai-2.jpg",
      description: "Expert training for your pet’s obedience and tricks.",
  
      actionUrl: "/service/training",
    },
    {
      id: 5,
      title: "Medical Assistance",
      icon: "https://getodie.com/wp-content/uploads/2020/12/28-992x558-1.jpg",
      description: "Veterinary care for all health-related needs.",
 
      actionUrl: "/service/medical-assistance",
    },
  ];
  



    return (
        <div className='h-full w-full flex flex-col  '>
    
    
        <Breadcrump/> 
       
<div className='flex-1 w-full '>

<Outlet/>






</div>



        </div>
      )
}
