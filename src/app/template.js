"use client"

import {motion} from 'framer-motion'
export default function Template({children}){
    return(
        <div className=''>
        <motion.div className='  fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-cyan-500'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        exit={{x:["0%", "100%"],width:["0%","100%"]}}
        
        transition={{duration:0.8,ease:"easeIn",delay:0.2}}
        />

        <motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white'
        initial={{x:"100%", width:"100%"}} 
        animate={{x:"0%",width:"0%"}}
        exit={{x:["0%", "100%"],width:["0%","100%"]}}
        transition={{duration:0.8,ease:"easeInOut",delay:0.4}}
        />
        <motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#0c0016]'          
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        exit={{x:["0%", "100%"],width:["0%","100%"]}}
        transition={{duration:0.8,ease:"easeInOut",delay:0.6}}
        />
        {children}
        </div>
    )
}