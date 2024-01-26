"use client"

import { motion} from "framer-motion"
import styles from './skillsData.module.css'




export function  SkillDataAnim(){
    const skills = [
        {name: "Html & Css", width:"95%"},
        {name:"Javascript", width:"90%"},
        {name:"MERN Stack", width:"72%"},
        {name:"React Lib", width:"80%"},
        {name:"Next_Js", width:"95%"},
        {name:"Laravel", width:"60%"},
        {name:"Express_js",width:"50%"},
        {name:"node_js",width:"52%"}
    ]
    
    
    return(
        <div className=" w-full p-3">
            <h1 className=" flex justify-center mt-5">Technical Skills</h1>
            <div className="md:flex md:flex-col grid grid-cols-2 gap-x-4 p-3 md:border-yellow-800 md:shadow-yellow-800  border shadow-slate-950 border-cyan-500 rounded-lg xl:border-red-700 xl:shadow-red-700 lg:border-[#3b82f6] shadow-lg   lg:shadow-[#3b82f6]">
            {skills.map((skill,index) =>(
                <div key={index} className={`${styles.container_skills}  text-sm `} >
                    <div className=" flex justify-between ">

                    <p className=""> {skill.name}</p>
                    <h1 className=" text-[0.7rem]  ">{skill.width}</h1>
                    </div>
                    <div className=" md:border-slate-900  xl:border-red-900 border lg:border-[#3b82f6] border-cyan-500 rounded shadow-md shadow-slate-950 ">
        
                    <motion.div  
                    initial={{width:"0%"}}
                    animate={{width:skill.width}}
                    className={`${styles.skills_bar} `}
                    transition={{duration:2,delay:0.6}}
                    >
                         <div className=" bg-cyan-500  lg:bg-[#3b82f6] md:bg-yellow-400 xl:bg-[#8b0000]" />
                    </motion.div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}