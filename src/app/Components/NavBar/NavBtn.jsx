"use client"
import { useState } from "react"
import Link from "next/link"
import { Links } from "./data"
import { ImMenu,ImCross } from "react-icons/im"
import styles from './Navbars.module.css'






export default function NavBtn(){
    const [active,setActive] = useState(false)
    const handleClick = ()=>{
        setActive(!active)
    }


    return(
        <div className=" ">
        <div className='  icon text-2xl lg:hidden xl:hidden 2xl:hidden flex justify-center items-center mr-4'>
            <button onClick={handleClick} className="">
                {active ? <ImCross className="" /> : <ImMenu className=""/>}
            </button>
            </div>
            <div id={styles.menu}
             className={` hover bg-transparent backdrop-blur-sm       ${active ? "" : "hidden"}  flex justify-between
             flex-col space-y-4 xl:hidden 
             min-w-max items-center top-28 text-secondary-content  h-auto
            absolute left-0 right-3 md:text-xl `}>
        {Links.map(link => (<Link  className=" hover:text-cyan-500 duration-500 w-fit " onClick={handleClick} key={link.id} href={link.path}>{link.title}</Link>))}
        </div>
    </div>
    )
}