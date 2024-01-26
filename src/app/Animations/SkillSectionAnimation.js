"use client"

import { motion,AnimatePresence } from "framer-motion"
import { useState,useEffect } from "react"
import { imageData } from "../Components/SkillsData/AnimationImageSkill"
import Image from "next/image"
import po1 from '../../../public/image/po1.jpg'
import p2 from '../../../public/image/p2.jpg'
import p3 from '../../../public/image/p3.jpg'
import p4 from '../../../public/image/p4.jpg'
import p5 from '../../../public/image/p5.jpg'
import p6 from '../../../public/image/p6.jpg'

export default function SkillSectionAnimation () {
    const AllImagesPortfolio = [
        {src:po1,id:1},
        {src:p2,id:2},
        {src:p3,id:3},
        {src:p4,id:4},
        {src:p5,id:5},
        {src:p6,id:6},
    ]
   
   
    const [currentIndex,setCurrentIndex] = useState(0)
    
    useEffect(()=>{
        const entervalId = setInterval(()=>{
            setCurrentIndex((prev)=>(prev+1) % AllImagesPortfolio.length)
        },5000)
        return ()=> clearInterval(entervalId)
    })
    
    
    return(
        <div className="slide-container">
            <AnimatePresence mode="wait">
            <motion.div
            key={currentIndex}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0}}
            transition={{duration:1}}
            className="slide"
            >
                <Image
                src={AllImagesPortfolio[currentIndex].src} width={300} height="auto" priority={true} alt="image" />
                </motion.div>
        </AnimatePresence>
        </div>
    )
}