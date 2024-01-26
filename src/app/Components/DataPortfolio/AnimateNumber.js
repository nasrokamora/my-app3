"use client"

import {useMotionValue, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'







export const AnimateNumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)      //قيمة المتغير
    const sprinValue = useSpring(motionValue, { duration: 8000 }) // المدة و القيمة للمتغير
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

export default function AnimateHeart({}){
    return(
        <div className=''>

            <AnimateNumbers value={value}/>
        </div>
    )
}