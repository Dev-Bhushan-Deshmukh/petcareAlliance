import React from 'react'

export const AgencyDetails = () => {

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
    </div>
  )
}
// rgb(246 246 246)