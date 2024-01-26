"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState,useEffect } from "react"
import Image from "next/image"
import react_js from "../../../Asent/react_js.png"
import CSS3 from "../../../Asent/CSS3.png"
import html_icon from "../../../Asent/html_icon.png"
import node_js from "../../../Asent/node_js.png"
import php_icon from "../../../Asent/php_icon.png"
import Next_js from "../../../Asent/next.png"
import express_js from "../../../Asent/express_js.png"
import mongo_db from "../../../Asent/mongo_db.png"
import tailwind_css from "../../../Asent/tailwind_css.png"
import framer from "../../../Asent/framer.png"









export default function AnimationImageSkill (){
      const imageData = [
        {src:Next_js,id:1},
        {src:react_js,id:2},
        {src:html_icon,id:3},
        {src:CSS3,id:4},
        {src:node_js, id:5},
        {src:php_icon, id:6},
        {src:express_js,id:7},
        {src:mongo_db,id:8},
        {src:tailwind_css,id:9},
        {src:framer,id:10},
    ]
 
 
 
    const [currentIndex,setCurrentIndex] = useState(0)
   useEffect(()=>{
       const intervalId = setInterval(()=>{
           setCurrentIndex((prev)=>(prev+1) % imageData.length)
       },5000)
       return () => clearInterval(intervalId)
   },[])
   
   
    return(
        <AnimatePresence mode="wait">
        <motion.div 
        key={currentIndex}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-150,}}
        transition={{
            duration:1.5,         
        }}    
        >
        <Image draggable='false' src={imageData[currentIndex].src} alt="image" width={100} height="auto" priority />
        </motion.div>
        </AnimatePresence>
    )
}