import React from 'react'
import { PetForm } from './PetForm';
import { motion } from 'framer-motion';

export const PetDetails = () => {


    const pets = [
        { src: 'https://w0.peakpx.com/wallpaper/143/746/HD-wallpaper-persian-cat-close-up-gray-cat-kitten-fluffy-cat-cats-domestic-cats-pets-persian.jpg', name: 'Whiskers' },
        { src: 'https://media.istockphoto.com/id/93385233/photo/coahuilan-box-turtle.jpg?s=612x612&w=0&k=20&c=a8l2Td8LuzmxBoGSBjMGRVGTyvDtwNVG0ajxa1AwMno=', name: 'Shelly' },
        { src: 'https://png.pngtree.com/background/20230426/original/pngtree-grey-bunny-is-sitting-on-the-ground-while-in-front-of-picture-image_2481251.jpg', name: 'Thumper' },
        { src: 'https://i.pinimg.com/originals/9d/61/d7/9d61d77d03a5016ab4d1bc19192297f9.jpg', name: 'Fluffy' },
        { src: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3', name: 'Buddy' },
        { src: 'https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZCUyMHBldHxlbnwwfHwwfHx8MA%3D%3D', name: 'Feathers' },
      ];
      

  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  //Specified Exit animation
    exit={{ opacity: 0, y: 0 }} className=' h-[92%]  w-full'>


<div className='h-[25%] w-full  '>
<h1 className='font-semibold text-slate-700'>My Pets</h1>
<div className='h-[70%] w-full flex items-center justify-start gap-10'>

{pets.map((item,index)=><div key={index} className='h-full w-[10%] font-semibold text-slate-600 flex flex-col   justify-center'>
<img src={item.src} className='h-[110px] w-[110px] object-cover rounded-md'/>
{item.name}
</div>)}







</div>

</div>




<div className='h-[75%] w-[100%]'> 
Add new pet
<PetForm/>






</div>

    </motion.div>
  )
}
