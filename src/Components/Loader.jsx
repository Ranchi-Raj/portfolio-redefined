import React from 'react'
import './Loader.css'
import load from './Assets/load.png'

import { motion } from 'framer-motion'

export default function Loader() {

  return (
    <motion.div
    
        // initial={{ opacity: 1, scale: 1 }}
        // animate={{ opacity: [1,1,0], scale: 1 }}
        // transition={{ duration: 9, ease: [0, 0.71, 0.2, 1.01],times: [0, 0.95, 1] }}
    >
        <div className="flex flex-col items-center justify-center h-screen text-4xl font-bold text-white head">
        <motion.img 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.6,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01]
         }}

        src={load} className='animate-spin ' style={{width:'250px'}} ></motion.img>
        <motion.div 
        initial={{ opacity: 0, scale: 1,x: 0, y: 0 }}
        animate={{ opacity: 1, scale: 1,y: -210, }}
        transition={{ duration: 0.25,delay: 2}}
        
        className='p-8 absolute'> LOGGING</motion.div>

        <motion.div 
        initial={{ opacity: 0, scale: 1,x: 0, y: 0 }}
        animate={{ opacity: 1, scale: 1,y: -145}}
        transition={{ duration: 0.5 ,delay: 2}}
        
        className='p-8 absolute'> IN</motion.div>
        <motion.div 
        
        initial={{ opacity: 0, scale: 1,x: 0, y: 0 }}
        animate={{ opacity: 1, scale: 1,y:145, }}
        transition={{ duration: 0.5,delay: 2 }}

        className='p-8 absolute'> ADITYA'S</motion.div>
        <motion.div 
         initial={{ opacity: 0, scale: 1,x: 0, y: 0 }}
         animate={{ opacity: 1, scale: 1,y:215, }}
         transition={{ duration: 0.5,delay: 2 }}
        
        className='p-8 absolute'> PORTFOLIO</motion.div>
        </div>
    </motion.div>
  )
}
