import React, { useState } from 'react'
import { GiPlainCircle } from "react-icons/gi";
import { PiArrowFatRightFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
export const AgencyDetails = () => {
const[currentService,setCurrentService]=useState(0);
    const petAnimals = [
        { animal: "Dog", img: "https://www.thesun.co.uk/wp-content/uploads/2018/07/NINTCHDBPICT000420745020.jpg?strip=all&w=960" },
        { animal: "Cat", img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_752,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/578211-gettyimages-542930526-aef7b0e9536cbdb1633029d5801c0649.jpg" },
        { animal: "Bird", img: "https://media.npr.org/assets/img/2024/01/25/african-grey-parrot-a4f997180fb09d316d26d2c2b3465120fabec08a.jpg" },
        { animal: "Rabbit", img: "https://cdn.britannica.com/20/194520-050-DCAE62F1/New-World-Sylvilagus-cottontail-rabbits.jpg" },
        { animal: "Fish", img: "https://i0.wp.com/aquariumtidings.com/wp-content/uploads/2014/06/Depositphotos_80481096_original.jpg" },
        { animal: "Hamster", img: "https://www.animalfunfacts.net/templates/yootheme/cache/f5/dwarf_hamster_l-f57d5390.jpeg" },
        { animal: "Turtle", img: "https://www.cdc.gov/salmonella/turtles-08-24/images/GettyImages-94366755-original.jpg" },
        { animal: "Guinea Pig", img: "https://animals.sandiegozoo.org/sites/default/files/2019-04/animals_guineapigs.jpg" },
        { animal: "Horse", img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e0ab53af-37d7-44ff-846f-868de437ef1d/dgbyuec-def114d2-297e-4a3e-bd2f-acbdc2c4b060.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwYWI1M2FmLTM3ZDctNDRmZi04NDZmLTg2OGRlNDM3ZWYxZFwvZGdieXVlYy1kZWYxMTRkMi0yOTdlLTRhM2UtYmQyZi1hY2JkYzJjNGIwNjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WWVEPnjVZpW4lJTff0b9oKF9TK-guihwodkjeMAJgx0" }
      ];
      const serviceCategories = [
        {
          category: "Training & Behavior",
          services: [
            { name: "Obedience training", price: "$40/session" },
            { name: "Tricks", price: "$30/session" },
            { name: "Behavioral correction", price: "$50/session" },
          ],
          applicableTo: ["Dogs", "Cats", "Birds"],
          location: "At provider's facility, on-site, or online sessions",
          price: "Starts at $40/session",
          constraints: "Behavioral correction might require multiple sessions; online training limited to basic obedience.",
        },
        {
          category: "Grooming",
          services: [
            { name: "Bathing", price: "$30" },
            { name: "Nail trimming", price: "$20" },
            { name: "Fur trimming", price: "$40" },
            { name: "Dental cleaning", price: "$50" },
          ],
          applicableTo: ["Dogs", "Cats", "Small Animals"],
          location: "At provider's facility or mobile grooming van",
          price: "Starts at $30",
          constraints: "May require pet's vaccination records; sedation options available for anxious pets.",
        },
        {
          category: "Diet & Nutrition",
          services: [
            { name: "Diet planning", price: "$25/consultation" },
            { name: "Meal preparation", price: "$30" },
            { name: "Feeding schedules", price: "$20" },
          ],
          applicableTo: ["Dogs", "Cats", "Birds", "Reptiles", "Small Mammals", "Aquatic Animals"],
          location: "Online consultation or at provider's facility",
          price: "Starts at $20/consultation",
          constraints: "Customized meal prep requires ingredient availability and extra charges for special diets.",
        },
        {
          category: "Enrichment & Companionship",
          services: [
            { name: "Pet sitting", price: "$15/hour" },
            { name: "Daycare", price: "$20/hour" },
            { name: "Interactive play", price: "$10/session" },
            { name: "Cage cleaning", price: "$25" },
          ],
          applicableTo: ["Dogs", "Cats", "Birds", "Small Mammals"],
          location: "On-site or at provider's facility",
          price: "Starts at $15/hour",
          constraints: "Pet sitting may include additional fees for extended hours or special care needs.",
        },
        {
          category: "Specialized Services",
          services: [
            { name: "Aquarium maintenance", price: "$100" },
            { name: "Stable cleaning", price: "$150" },
            { name: "Large animal care", price: "$200" },
          ],
          applicableTo: ["Aquatic Animals", "Horses"],
          location: "On-site only",
          price: "Starts at $100",
          constraints: "May require access to specific tools or facilities; stable cleaning only for pre-approved clients.",
        },
      ];
      

  return (
    <div  className='w-full h-[95%] overflow-y-auto'>

<div className='h-[20%] w-full bg-[#eae4e0] flex pl-3 items-center shadow-sm border-b border-t gap-2 '>

<img className='rounded-full h-[120px] w-[120px] border-4 shadow-sm border-slate-300' src="https://cdn1.vectorstock.com/i/1000x1000/67/05/house-for-cat-and-dog-pet-care-logo-with-home-vector-35046705.jpg" alt="" />

<div className=' h-full w-1/2 flex flex-col justify-center'>
<h1 className='font-semibold text-lg '> Animal at Home petcare service</h1>
<div className='text-sm text-slate-500 h-[40%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, autem! Autem recusandae aliquam ex unde deleniti dolores aliquid omnis explicabo.</div>
<div className='flex h-[30%]  items-center  gap-2 '>
    <div className='text-center flex flex-col text-sm font-semibold w-[15%] items-start'> <span className='font-bold text-[22px]'> 300</span>  Served </div>   
    <div className='text-center flex flex-col text-sm font-semibold w-[15%] items-start'> <span className='font-bold text-[22px]'> 120</span>  Reviews </div>   
    <div className='text-center flex flex-col  text-sm font-semibold w-[15%] items-start'> <span className='font-bold text-[22px]'> 4.5</span>  Ratings </div>   
    
     </div>
</div>

</div>
<h1 className='bg-slate-50 h-[4%] font-semibold pl-3'>We perovide service for </h1>
<div className='h-[15%] w-full  flex items-center gap-5 pl-3 mt-3  '>
{

petAnimals.map((pet)=><div className='h-full text-center  flex flex-col items-center justify-center '>

<img className='rounded-full h-[90px] w-[90px] border-2 object-cover object-center  shadow-md border-slate-100' src={pet.img} alt="" />

<span className='text-lg font-semibold text-slate-600'>{pet.animal}</span>


</div>)

}


</div>
<h1 className='bg-slate-50 h-[4%] font-semibold pl-3 mt-3'>Service Description </h1>
<div className='w-[60%] h-[25%] text-sm text-slate-500 p-3 '>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas est iste ducimus dicta totam vero asperiores itaque iure distinctio assumenda amet, similique veniam repudiandae inventore ratione? Dicta reprehenderit expedita cupiditate. Perferendis repellendus quaerat ipsum similique nam voluptatem, error esse rem eligendi sequi aspernatur sed iusto? Inventore et temporibus rerum odio reprehenderit, perspiciatis maxime ad esse facilis soluta quidem minus similique quibusdam molestias ipsum iste mollitia cupiditate ullam quos sit enim.

</div>


<h1 className='bg-slate-50 h-[4%] font-semibold pl-3 mt-3'>Services </h1>
<div className=' w-full h-[50%] flex pl-3 gap-3 items-center overflow-x-auto mt-3'>

<div className='border shrink-0 h-[100%] w-[27%] rounded-md shadow-sm '> 
<h1 className='bg-slate-50 rounded-tl-md rounded-tr-md text-slate-600  font-semibold text-center'>Service category</h1>


{serviceCategories.map((serive,index)=>
<div className='flex items-center h-[10%] gap-3 pl-3'><span className='block w-[70%]'>{serive.category}</span> <button className='bg-orange-400 rounded-sm text-sm  flex items-center justify-center gap-2 w-[20%] h-[25px] text-slate-100  hover:bg-green-500  ' onClick={()=>setCurrentService(index)}>view<PiArrowFatRightFill color='white' /></button></div>
)}

</div>

<div className='border shrink-0 h-[100%] w-[30%] rounded-md'>

  <h1 className='bg-slate-50 rounded-tl-md rounded-tr-md text-slate-600  font-semibold text-center'>{serviceCategories[currentService].category}</h1>

<div className='h-[50%] w-full  '>

{
  serviceCategories[currentService].services.map((item)=><div className=' h-[13%] mb-1 bg-white  p-1 flex  w-[100%] justify-between items-center text-sm  text-slate-400 ' > 
 <span className=' flex items-center gap-2'><GiPlainCircle color='#2dde2d' size={10}/> {item.name}</span> <span className=''> {item.price}</span></div>)
}
</div>


<h1 className='bg-slate-50 rounded-tl-md rounded-tr-md text-slate-600  font-semibold text-center'>Applicable to</h1>
<div className='w-full h-[20%]  flex flex-wrap gap-x-2  justify-center mt-1  '>

{serviceCategories[currentService].applicableTo.map((item)=><div className='bg-slate-50 text-slate-500 text-sm lowercase h-[25px] pl-1 pr-1 grid place-content-center rounded-md shadow-sm border border-slate-100 '>{item}</div>)}
</div>

</div>



<div className=' shrink-0 h-[100%] w-[30%] rounded-md'>


<div className='border  h-[30%] w-full rounded-md'>

<h1 className='bg-slate-50 rounded-tl-md rounded-tr-md text-slate-600  font-semibold text-center'>Applicable to</h1>

 
<div className='w-full h-[70%]   flex flex-wrap gap-x-2  justify-center mt-1  '>

{serviceCategories[currentService].applicableTo.map((item)=><div className='bg-slate-50 text-slate-500 text-sm lowercase h-[25px] pl-1 pr-1 grid place-content-center rounded-md shadow-sm border border-slate-100 '>{item}</div>)}
</div>





</div>


<div className='border  h-[30%] w-full rounded-md'>

<h1 className='bg-slate-50 rounded-tl-md rounded-tr-md text-slate-600  font-semibold text-center'>Special note</h1>

 
<span className='text-sm text-slate-500 pl-1 flex'><IoLocationSharp color='black ' size={15} />{serviceCategories[currentService].location}</span>
<span className='text-sm text-slate-500 flex pl-1'> {serviceCategories[currentService].constraints}</span>






</div>
</div>






</div>
<div className=' w-full h-[100%]'></div>

    </div>
  )
}
// rgb(246 246 246)