import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Pages/home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Login } from './Pages/Login'

function App() {
let router=createBrowserRouter([
 
{path:'/', element:<Home/>},
{path:'/auth', element:<Login/>},








])

  return (
   
<RouterProvider router={router}></RouterProvider>
  )
}

export default App
