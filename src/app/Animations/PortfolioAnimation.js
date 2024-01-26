"use client"
import { motion } from 'framer-motion'



export function PortfolioAnimation({children}){
    return(
        <motion.div initial={{opacity:0}} animate={{ opacity: 0}} whileInView={{opacity:1}}
         transition={{ duration: 1 }}
        // className=' bg-gray-700   h-[200px]  relative overflow-hidden flex justify-center flex-col items-center  p-3 rounded-lg 
        // shadow-lg border-slate-900 shadow-slate-900'
        >

        {children}
    </motion.div>
    )
}

export function IdPageAnimate({children}){
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8, ease:'easeIn'}}
        >
            {children}
        </motion.div>
    )
}

export function IdImageAnimate({children}){
    return(
        <motion.div
        initial={{x:-100,opacity:0}}
        animate={{opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,ease:"easeInOut"}}
        
        >
            {children}
        </motion.div>
    )
}
