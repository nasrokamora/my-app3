"use client"

import { useEffect, useRef, useState } from "react"
import {motion} from 'framer-motion'
import { SlArrowUpCircle } from "react-icons/sl";

export default function ToggleButtonPortfolio(){
    
    const [showButton,setShowButton] = useState(false)
    const btnRef = useRef()
    
    useEffect(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 120) {
                setShowButton(true)
            }else{
                setShowButton(false)
            }
        }
        window.addEventListener('scroll',handleScroll)

        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    const handleClick = () =>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    
    return(

        <div>

            {showButton &&
            <motion.button
            whileTap={{scale:0.5}} whileHover={{scale:1.5, transition:{duration:0.5}}}
            initial={{scale:0,x:100,y:50}} animate={{scale:1.1,x:0,y:0}}  whileInView={{opacity:1,scale:1.2}} transition={{duration:0.6}}
            onClick={handleClick} className="btn-down flex justify-center items-center  fixed 
            left-[85%] top-[80%]  p-2 rounded-full md:bg-[#facc15]   md:shadow-md md:shadow-yellow-800  text-xl  
             bg-slate-950 shadow-sm shadow-primary "
            ref={btnRef}><SlArrowUpCircle className=" text-white  text-xl md:text-black" /></motion.button>
            
            }
        </div>
    )
}