import React from 'react'
import './Contents.css'
import { motion } from "framer-motion";
import logo from './Assets/logo.png'
import bg from'./Assets/one.jpeg'
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import ContactForm from './Contact';
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
// import skill from './Assets/skill.jpg'
import Progress from './Progress';



export default function Contents() {


  return (

    <div>
    
    <div className='bg-cover bg-center ' style={{backgroundImage: `url(${bg})`,height: '110vh'}}>
      <nav className='flex justify-between'>
        <img src={logo} alt="logo" className='w-48' />
        <div className='text-white m-10'> Yet to Add</div>
      </nav>

      <motion.div 

      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 ,x: 0, y: -150}}
      transition={{staggerChildren: 0.2,
        delayChildren: 0.5,
        duration:1
       }}
      className='text-left text-8xl text-pink-500 mt-48 font-bold head ml-5 shrink'
              
      > Aditya Raj</motion.div> 
    
    <motion.div
      initial = {{x:30,y:0}}
      animate = {{x:0,y:-150}}
      transition={{duration: 1}}

      className='text-white text-4xl font-medium my-6 text-left mx-9 head shrink2'
      
    > Web Developer, Data Science Enthusiast, Competitive Programmer </motion.div>
      </div>
      <div 

      // style={{backgroundImage: `url(${skill})`,height: '130vh'}} 
      
      className= 'bg-cover bg-center animate-fade-up animate-once animate-duration-[700ms] animate-ease-in animate-delay-1000 animate-fill-forwards'>
          <h1 className='text-white text-7xl font-bold pt-6  text-left mx-9 shrink'>Skills :</h1>

          <div className='flex flex-col'>
            
            <div className='flex justify-around mt-32 mb-4'>
              <h1 className='text-white text-6xl font-bold mr-16 sym'><FaJava /></h1>
             <Progress
             percent={80}/>
            </div>  

            <div className='flex justify-around my-5'> 
              <h1 className='text-white text-6xl font-bold mr-16 sym'><FaPython /></h1>
               <Progress
             percent={68}/>
            </div>

            <div className='flex justify-around my-5'> 
              <h1 className='text-white text-6xl font-bold mr-16 sym'><FaHtml5/></h1>
               <Progress
             percent={90}/>
            </div>

            <div className='flex justify-around my-5'> 
              <h1 className='text-white text-6xl font-bold mr-16 sym'><IoLogoCss3 /></h1>
               <Progress
             percent={85}/>
            </div>

            <div className='flex justify-around my-5'> 
              <h1 className='text-white text-6xl font-bold mr-16 sym'><IoLogoJavascript /></h1>
               <Progress
             percent={60}/>
            </div>

            <div className='flex justify-around my-5'> 
              <h1 className='text-white text-6xl font-bold mr-16 sym'><SiNumpy /></h1>
               <Progress
             percent={70}/>
            </div>

            <div className='flex justify-around my-2'> 
              <h1 className='text-white text-6xl font-bold mr-16 sym'><SiPandas /></h1>
               <Progress
             percent={60}/>
            </div>

          </div>
              {/* Contact Me */}
        
       </div>
       <div>

        <h1 className='text-white text-7xl font-bold my-6 text-left mx-9 heading shrink3 mt-32'>Contact Me :</h1>

        <ContactForm/>
        </div>

        <div>

        <h1 className='text-white text-7xl font-bold my-6 text-left mx-9 heading shrink3 mt-32'>Contect :</h1>

        <div className='flex justify-evenly my-16'>
          <a href='https://www.instagram.com/'><CiInstagram/></a>
          <a href='https://www.instagram.com/'><FaGithub/> </a>
          <a href='https://www.instagram.com/'> <FaTelegramPlane/> </a>
          <a href='https://www.instagram.com/'> <CiTwitter/></a>
          <a href='https://www.instagram.com/'> <CiLinkedin/></a>
        </div>
        </div>

      </div>
  )
}
