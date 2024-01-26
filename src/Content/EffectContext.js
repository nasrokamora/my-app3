"use client"


import { createContext } from "react"
import {motion} from 'framer-motion'
export const EffectContext = createContext()


export default function EffectProvider({childen}){

    return(
        <EffectContext.Provider value={motion} >
            <div>
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
            {childen}
            </div>
        </EffectContext.Provider>
    )
}