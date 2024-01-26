"use client"
import {motion} from 'framer-motion'



export function AnimateContactForm({children}){
    return(
        <motion.div
        initial={{x:-100, opacity:0,}}
        transition={{duration:1.5,ease:"easeInOut",delay:0.8}}
        animate={{x:0,opacity:1,}}
        whileInView={{opacity:1}}
        >
            {children}
        </motion.div>
    )
}
export function AnimateTitleContact({children}){
    return(
        <motion.div
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1,}}
        transition={{duration:1,delay:0.8}}
        >
            {children}
        </motion.div>
    )
}