import React, { useState } from 'react'

export const ServiceBooking = () => {
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
  const[serviceList,setServiceList]=useState([]);
  const[selectedPet,setselectedPet]=useState(null);
const showServices=(animal)=>{
  console.log(animal)
  setServiceList(serviceCategories.filter((service)=>service.applicableTo.includes(animal) ))
}
//.services.filter((innerItem)=>{return innerItem.applicableTo.includes(animal)})

const serviceCategories = [
  {
    name: "Obedience training",
    price: "$40/session",
    applicableTo: ["Dog", "Cat", "Bird"],
    location: [
      { type: "providerSite", charges: "$40/session" }
    ],
    category: "Training & Behavior",
    constraints: "Behavioral correction might require multiple sessions; online training limited to basic obedience.",
  },
  {
    name: "Tricks",
    price: "$30/session",
    applicableTo: ["Dog", "Cat", "Bird"],
    location: [
      { type: "providerSite", charges: "$30/session" }
    ],
    category: "Training & Behavior",
    constraints: "Behavioral correction might require multiple sessions; online training limited to basic obedience.",
  },
  {
    name: "Behavioral correction",
    price: "$50/session",
    applicableTo: ["Dog", "Cat"],
    location: [
      { type: "providerSite", charges: "$50/session" },
      { type: "clientSite", charges: "$60/session" }
    ],
    category: "Training & Behavior",
    constraints: "Behavioral correction might require multiple sessions; online training limited to basic obedience.",
  },
  {
    name: "Bathing",
    price: "$30",
    applicableTo: ["Dog", "Cat", "Small Animals"],
    location: [
      { type: "providerSite", charges: "$30" },
      { type: "mobile", charges: "$35" }
    ],
    category: "Grooming",
    constraints: "May require pet's vaccination records; sedation options available for anxious pets.",
  },
  {
    name: "Nail trimming",
    price: "$20",
    applicableTo: ["Dog", "Cat", "Small Animals"],
    location: [
      { type: "providerSite", charges: "$20" },
      { type: "mobile", charges: "$25" }
    ],
    category: "Grooming",
    constraints: "May require pet's vaccination records; sedation options available for anxious pets.",
  },
  {
    name: "Fur trimming",
    price: "$40",
    applicableTo: ["Dog", "Cat"],
    location: [
      { type: "mobile", charges: "$45" }
    ],
    category: "Grooming",
    constraints: "May require pet's vaccination records; sedation options available for anxious pets.",
  },
  {
    name: "Dental cleaning",
    price: "$50",
    applicableTo: ["Dog", "Cat"],
    location: [
      { type: "providerSite", charges: "$50" }
    ],
    category: "Grooming",
    constraints: "May require pet's vaccination records; sedation options available for anxious pets.",
  },
  {
    name: "Diet planning",
    price: "$25/consultation",
    applicableTo: ["Dog", "Cat", "Bird", "Reptile", "Small Mammals", "Fish", "Turtle"],
    location: [
      { type: "providerSite", charges: "$25/consultation" }
    ],
    category: "Diet & Nutrition",
    constraints: "Customized meal prep requires ingredient availability and extra charges for special diets.",
  },
  {
    name: "Meal preparation",
    price: "$30",
    applicableTo: ["Dog", "Cat", "Bird", "Reptiles"],
    location: [
      { type: "providerSite", charges: "$30" }
    ],
    category: "Diet & Nutrition",
    constraints: "Customized meal prep requires ingredient availability and extra charges for special diets.",
  },
  {
    name: "Aquarium maintenance",
    price: "$100",
    applicableTo: ["Fish", "Turtle"],
    location: [
      { type: "clientSite", charges: "$100" }
    ],
    category: "Specialized Services",
    constraints: "May require access to specific tools or facilities; stable cleaning only for pre-approved clients.",
  },
  {
    name: "Stable cleaning",
    price: "$150",
    applicableTo: ["Horse"],
    location: [
      { type: "clientSite", charges: "$150" }
    ],
    category: "Specialized Services",
    constraints: "May require access to specific tools or facilities; stable cleaning only for pre-approved clients.",
  }
];

  

  return (
   <div  className='w-full  h-[90%]' >
  <h1 className='bg-slate-50 h-[4%] font-semibold pl-3'>Select pet </h1>
<div className='h-[15%] w-full  flex items-center gap-5 pl-3 mt-3  '>
{

petAnimals.map((pet)=><div onClick={()=>showServices(pet.animal)} className='h-full  text-center  flex flex-col items-center justify-center '>

<img className='rounded-full h-[90px] w-[90px] border-2 object-cover object-center  shadow-md border-slate-100' src={pet.img} alt="" />

<span className='text-lg font-semibold text-slate-600'>{pet.animal}</span>


</div>)

}


</div>
   {
    serviceList.map((item)=><li>{item.name} --{item.price}</li>)
   }
   
   
   
   
   </div>
  )
}
