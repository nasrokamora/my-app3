"use client"

import {GoMoveToTop} from 'react-icons/go'
import {useState,useEffect, useRef} from 'react'
import { motion } from 'framer-motion'


export default function ToggleButton(){

    const [showButton,setShowButton] = useState(false)
    const btnRef = useRef()

    useEffect(()=>{
        const handleScroll =()=>{
        if(window.scrollY > 100){
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


    const handleClick = ()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    return(
        <motion.div >
            
            {showButton &&

                    <motion.button
                    initial={{scale:0,x:100,y:50}} animate={{scale:1.1,x:0,y:0}}  whileInView={{opacity:1,scale:1.2}} transition={{duration:0.6}}
                    ref={btnRef} onClick={handleClick} className={`"  btn-down flex justify-center items-center  fixed 
                    left-[85%] top-[80%]  p-2 rounded-full md:bg-[#facc15]  md:shadow-md md:shadow-yellow-800 lg:hidden xl:hidden 2xl:hidden    text-xl   "`}><GoMoveToTop className=" text-xl md:text-slate-900 " /></motion.button>
            }

           
        </motion.div>
    )
}