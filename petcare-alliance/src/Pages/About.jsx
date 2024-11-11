import React from 'react'
import { Navbar } from '../utilities/navbar'
import { Accordian } from '../components/Accordian/Accordian'


export const About = () => {
    const accordian='bg-slate-800 h-[20%] w-[65%] border-b-2'
     const accordianItem='bg-slate-400 h-[70%] w-full'
  return (
    <div className='bg-slate-50 h-screen w-screen  '>

    <Navbar/>
    <Accordian style={accordian}>
    <Accordian.Item style={accordianItem} >
    <Accordian.Title id='1'>

    AccordianItem-1
    </Accordian.Title>
    <Accordian.Content id='1'>content-1</Accordian.Content>

    </Accordian.Item>

    </Accordian>

    <Accordian  style={accordian}>
    <Accordian.Item style={accordianItem}>
    <Accordian.Title  id='2'>

    AccordianItem-1
    </Accordian.Title>
    <Accordian.Content id='2'>content-1</Accordian.Content>
    </Accordian.Item>
    
</Accordian>









    </div>
  )
}
