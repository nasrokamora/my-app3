"use client"

import{motion} from 'framer-motion'




export function AboutImageAnimation({children}){
    return(       
        <motion.div 
        initial={{opacity:0, x: -100}}
        animate={{opacity:1, x: 0}}
        transition={{duration:1.5,ease:"easeInOut",delay:0.6}}
        >
            {children}
        </motion.div>

    )
}
export function AboutSectionAnimation({children}){
    return(
        <motion.div 
        initial={{opacity:0,scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{duration:1.5,delay:0.8}}
        // whileInView={{}}
        >
            {children}
        </motion.div>
    )
}
export function AboutListAnimation({children}){
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:0}}
        whileInView={{opacity:1,}}
        transition={{duration:1}}
        >
            {children}
        </motion.div>
    )
}

