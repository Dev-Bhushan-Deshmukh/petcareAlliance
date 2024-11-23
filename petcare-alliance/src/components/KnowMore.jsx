import React from 'react'
import { useLocation } from 'react-router-dom'
export const KnowMore = () => {
    const {search}=useLocation();
    const query = new URLSearchParams(search);
   const paramField = query.get('name');
   console.log(paramField)
  return (
    <div>KnowMore</div>
  )
}
