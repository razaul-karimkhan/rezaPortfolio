import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import {  FaMobile } from "react-icons/fa";
import { SiAntdesign, SiProgress } from 'react-icons/si';
import { AiFillAppstore } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
const Features = () => {
  return (
    <section id='features' className='w-full  py-20   border-b-[1px] border-b-black'>


      
     <Title title="Features" des="what i do"/>

     <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
       <Card 
       title="Business Strategy"
       des="Whether you need a clear roadmap, expert execution, or both, we provide the strategic marketing leadership that moves the needle"
      
       />
      
       <Card 
        title="App Development"
       des="Whether you need a clear roadmap, expert execution, or both, we provide the strategic marketing leadership that moves the needle"
       icon={<AiFillAppstore />}
       />
       <Card
        title="SEO Optimisation"
       des="Whether you need a clear roadmap, expert execution, or both, we provide the strategic marketing leadership that moves the needle"
       icon={<SiProgress />}
       />
       <Card
        title="Mobile Development"
       des="Whether you need a clear roadmap, expert execution, or both, we provide the strategic marketing leadership that moves the needle"
       icon={<FaMobile />}
       />
       <Card
        title="UX Design"
       des="Whether you need a clear roadmap, expert execution, or both, we provide the strategic marketing leadership that moves the needle"
       icon={<SiAntdesign />}
       />
       <Card
        title="Hosting Websites"
       des="Whether you need a clear roadmap, expert execution, or both, we provide the strategic marketing leadership that moves the needle"
       icon={<TbWorld />}
       />


     </div>
    </section>
  )
}

export default Features