"use client"

import { AnimatePresence, motion, useAnimate, useInView, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

import { FaRegHeart } from 'react-icons/fa6'





export const AnimateNumber = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const sprinValue = useSpring(motionValue, { duration: 8000 })
    const isView = useInView(ref, { once: true })

    useEffect(() => {
        if (isView) {
            motionValue.set(value)
        }
    }, [isView, motionValue, value])

    useEffect(() => {
        sprinValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [sprinValue, value])
    return <span ref={ref}></span>
}


export function Card(){
    return(
        <div className="">
            <div className="">
                <span className=" w-fit"> <AnimateNumber value={''}/></span>
                
            </div>
        </div>
    )
}




