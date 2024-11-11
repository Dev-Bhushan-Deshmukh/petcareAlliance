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
import { Schedule } from './components/Schedule'
import { Service } from './Pages/Service'
import { Activity } from './components/Activity'
import { Routine } from './components/Routine'
import { HealthCheckup } from './components/HealthCheckup'
import { FcAbout } from 'react-icons/fc'
import { About } from './Pages/About'

function App() {
let router=createBrowserRouter([
 
{path:'/', element:<Home/>},
{path:'/about', element:<About/>},
{path:'/auth', element:<Login/>},

{path:'/application', element:<Application/>, children:[

  {path:'/application/profile', element:<Profile/>  ,children:[
    
    
    {index:true, path:'/application/profile/History', element:<History/> },
  
      { path:'/application/profile/petdetail', element:<PetDetails/> }
    
  ]},
  {path:'/application/schedule', element:<Schedule/>,children:[
{path:'/application/schedule/activity', element:<Activity/>},
{path:'/application/schedule/routine', element:<Routine/>},
{path:'/application/schedule/healthcheckup', element:<HealthCheckup/>}



  ] },
  {path:'/application/service', element:<Service/> }
  
  


]},







])

  return (
   
<RouterProvider router={router}></RouterProvider>
  )
}

export default App
