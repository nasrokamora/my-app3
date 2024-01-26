"use client"

import po1 from '../../../public/image/po1.jpg'
import p2 from '../../../public/image/p2.jpg'
import portfolio02 from '../../../public/image/portfolio02.jpg'
import { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import Image from 'next/image'
import {motion,useAnimation} from 'framer-motion'
import { FaArrowRight } from "react-icons/fa6";



export default function SliderImages() {
    const [prevIndex, setPrevIndex] = useState(0)
    const SlideData = [po1, p2, portfolio02]

    const next = ()=>{
        const nextI = (prevIndex +1) % SlideData.length
        setPrevIndex(nextI)
    }
    const prev = ()=>{
        const prev = (prevIndex -1 +  SlideData.length) % SlideData.length
        setPrevIndex(prev)
    }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setPrevIndex((prev => (prev + 1) % SlideData.length))
    //     }, 6000)
    //     return () => clearInterval(interval)
    // }, [])





    return (
        <div className='container p-4 w-full h-3/5 border rounded-md '>
            <div className='   w-4/5 h-full rounded-md  flex flex-col items-center '>
                <motion.div className=' '>
                    <Image  draggable='false' className=' rounded-lg' src={SlideData[prevIndex]} width={300} height="auto" alt='portfolio_jpg' priority  />
                </motion.div>
                <div className='btn-article  flex justify-center gap-4 pt-2   w-full text-[2rem] '>
                    <motion.button  type='button' onClick={next}><FaArrowLeft  /></motion.button>
                    <motion.button type='button' onClick={prev}><FaArrowRight /></motion.button>
                </div>
            </div>
        </div>
    )
}