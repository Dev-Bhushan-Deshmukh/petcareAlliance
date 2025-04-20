// import React, { useState, useEffect, useRef } from 'react';

// export const TypingIndicator = () => {
//   const [inputVal, setInputVal] = useState('');
//   const [indicator, setIndicator] = useState('');
//   const timeoutRef = useRef(null);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputVal(value);

//     // User is typing
//     setIndicator('User is typing...');

//     // Clear previous timeout
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // Set timeout to hide the typing indicator
//     timeoutRef.current = setTimeout(() => {
//       setIndicator('');
//     }, 1000);
//   };

//   // Clean up on unmount
//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   return (
//     <div className="p-4 border w-[300px] rounded shadow">
//       <input
//         type="text"
//         value={inputVal}
//         onChange={handleInputChange}
//         placeholder="Type a message..."
//         className="border p-2 w-full rounded"
//       />
//       <div className="text-sm text-gray-500 mt-2">{indicator}</div>
//     </div>
//   );
// };
// import React, { useRef, useState, useEffect } from 'react';

// export const TypingIndicator = () => {
//   const [yourMessage, setYourMessage] = useState('');
//   const [friendMessage, setFriendMessage] = useState('');
//   const [yourTyping, setYourTyping] = useState('');
//   const [friendTyping, setFriendTyping] = useState('');

//   const yourTimeout = useRef(null);
//   const friendTimeout = useRef(null);

//   const handleTyping = (setter, timeoutRef, setTyping) => (e) => {
//     setter(e.target.value);
//     setTyping('Typing...');

//     if (timeoutRef.current) clearTimeout(timeoutRef.current);

//     timeoutRef.current = setTimeout(() => {
//       setTyping('');
//     }, 1500);
//   };

//   return (
//     <div className="p-4 space-y-6">
//       <div>
//         <p className="font-bold">You:</p>
//         <p className="text-green-600">{yourTyping}</p>
//         <input
//           type="text"
//           className="border p-2 w-full"
//           value={yourMessage}
//           onChange={handleTyping(setYourMessage, yourTimeout, setYourTyping)}
//         />
//       </div>

//       <div>
//         <p className="font-bold">Friend:</p>
//         <p className="text-blue-600">{friendTyping}</p>
//         <input
//           type="text"
//           className="border p-2 w-full"
//           value={friendMessage}
//           onChange={handleTyping(setFriendMessage, friendTimeout, setFriendTyping)}
//         />
//       </div>
//     </div>
//   );
// };




import React, { useRef, useState } from 'react'

export const TypingIndicator = () => {
const[userTyping,setUserTyping]=useState('');
const[userVal,setUserVal]=useState('');

const[anotheruserTyping,setAnotherUserTyping]=useState('');
const[anotherUserVal,setAnotherUserVal]=useState('');
const userRef=useRef(null);
const anotherUserRef=useRef(null);


const handleTypingStatus=(inputState,typingState,refs)=>(e)=>{
inputState(e.target.value)
typingState('Typing...')
if(refs.current) clearTimeout(refs.current);



refs.current=setTimeout(() => {
    typingState('');
}, 1000);


}

  return (
    <div>TypingIndicator
<div className='border-2 border-slate-200 w-[400px] p-3'>

<p className='text-green-400'>{userTyping}</p>
<input type="text" className='w-full border-2 border-slate-200 ' value={userVal}  onChange={handleTypingStatus(setUserVal,setUserTyping,userRef)} />

</div>

<div className='border-2 border-slate-200 w-[400px] p-3'>

<p className='text-green-400'>{anotheruserTyping}</p>
<input type="text" className='w-full border-2 border-slate-200 ' value={anotherUserVal}  onChange={handleTypingStatus(setAnotherUserVal,setAnotherUserTyping,anotherUserRef)} />

</div>


    </div>
  )
}
