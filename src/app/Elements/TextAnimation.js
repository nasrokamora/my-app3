"use client"

import { TypeAnimation } from 'react-type-animation'

export default function TextAnimation(){
  return(
    <>
        <TypeAnimation 
        sequence={[
          "I'm",
          1400,
          "a",
          1400,
          "..",,
          "*-",
          "é","é(","²","é&","a=","q@",
          "é&²!:",
          "=>",
          "Full Stack Developer",
          2300,
          "and...",
          1300,
          "Web Developer",
          2000,

        ]}
        wrapper='span'
        speed={40}
        style={{display:'inline-block', color:"darkred", textShadow:"0px 0px 5px darkred" }}
        repeat={Infinity} />

    </>
  )
}