import React, { useState } from 'react'

export const AutoComplete = () => {
const[inputVal,setInputVal]=useState('')
console.log('rerendered')
const[suggestions,setSuggestions]=useState([])

function handleInput(e){
    console.log(e.target.value)
if(e.target.value==''){

setInputVal('')

}
else{
    setInputVal(e.target.value)
    // console.log(suggestions.filter((item)=>item.includes(e.target.value)))
if(suggestions.filter((item)=>item.includes(e.target.value)).length>0){
console.log('IF passed')
suggestions.filter((item)=>item.includes(e.target.value))

console.log('filtered arr:-->',suggestions.filter((item)=>item.includes(e.target.value)))
setInputVal(suggestions.filter((item)=>item.includes(e.target.value))[0])


}
else{
   let  tempSugg=[...suggestions];
    console.log('Old suggestion:-->',tempSugg);
    tempSugg.push(e.target.value);
    console.log('suggestion new:-->',tempSugg);
    setSuggestions(tempSugg);
  
}

    
}
}

  return (
    <div  className='w-full h-[90%]' >

<h1>Autocomplete</h1>



<input value={inputVal} onChange={(e)=>handleInput(e)} type="text" className='border-2 border-slate-100' />

    </div>
  )
}
