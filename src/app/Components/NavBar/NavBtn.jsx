"use client"
import { useState } from "react"
import Link from "next/link"
import { Links } from "./data"
import { ImMenu, ImCross } from "react-icons/im"
import styles from './Navbars.module.css'






export default function NavBtn() {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }


    return (
        <div className=" ">
            <div className='  icon text-2xl lg:hidden xl:hidden 2xl:hidden flex justify-center items-center mr-4'>
                <button onClick={handleClick} className="">
                    {active ? <ImCross className="" /> : <ImMenu className="" />}
                </button>
            </div>
            <div id={styles.menu}
                className={` hover bg-white/20 rounded-md dark:bg-[#0c0015]/50 backdrop-blur-sm p-3  ${active ? "" : "hidden"}  flex justify-between z-50
             flex-col space-y-4 xl:hidden 
             min-w-max items-center top-28  text-white   dark:text-black  h-auto
            absolute left-0 right-3  `}>
                {Links.map(link => (<Link className=" flex justify-center bg-slate-950 items-center hover:bg-cyan-500 dark:border-[#8d0000] duration-500 w-1/4 dark:bg-[#cc8a1d] dark:hover:bg-cyan-500 p-1 rounded-md " onClick={handleClick} key={link.id} href={link.path}>{link.title}</Link>))}
            </div>
        </div>

    )
}