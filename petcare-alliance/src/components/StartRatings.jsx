import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
export const StartRatings = () => {


const rating={
    total:5,
    actual:3
}


const[ratingStar,setRatingStar]=useState({total:0,
    actual:null
});
const[RatingStarArr,setRatingStarArr]=useState([])
useEffect(()=>{
setRatingStar(rating);
setRatingStarArr(Array.from(Array(rating.total).keys()));
},[])
function changeRate(item){
   
console.log('clicked')
let temp={...ratingStar};
// console.log(item+1,temp.actual)
if(item+1,temp.actual){

    temp.actual=item;
}
else{
    temp.actual=item+1;
}

setRatingStar(temp)
// setRatingStarArr(RatingStarArr);
}
// console.log(Array.from(Array(rating.total).keys()))
  return (
    <div className='w-full h-[20%]'>

        <h1>StartRatings</h1>

        {Array.from(Array(rating.total).keys()).map((item)=><CiStar key={item} onClick={()=>changeRate(item)}  color= {item < ratingStar.actual && 'red'}  />)}
    
    </div>
  )
}
