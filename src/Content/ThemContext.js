"use client"

import { createContext, useState } from "react"

export const  ThemContext = createContext()


export default function ThemProvider({children}){
    
    const [mode, setMode]= useState("dark")
    const Toggle = () =>{
        setMode(prev =>(prev ==='dark' ? "light" : "dark"))
    }
    
    return(
        <ThemContext.Provider value={{Toggle, mode}}>
            <div className={`theme ${mode}`}>
            {children}
            </div>
        </ThemContext.Provider>
    )
}