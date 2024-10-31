import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Pages/home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Login } from './Pages/Login'
import { Application } from './Pages/Application'
import { Profile } from './Pages/Profile'
import { History } from './components/History'
import { PetDetails } from './components/PetDetails'

function App() {
let router=createBrowserRouter([
 
{path:'/', element:<Home/>},
{path:'/auth', element:<Login/>},

{path:'/application', element:<Application/>, children:[

  {path:'/application/profile', element:<Profile/>  ,children:[
    
    
    {index:true, path:'/application/profile/History', element:<History/> },
  
      { path:'/application/profile/petdetail', element:<PetDetails/> }
    
  ]}




]},







])

  return (
   
<RouterProvider router={router}></RouterProvider>
  )
}

export default App
