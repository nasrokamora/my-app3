"use client"
import styles from './DarkModeToggle.module.css'
import {MdOutlineLightMode} from 'react-icons/md'
import {CiDark} from 'react-icons/ci'
import { ThemContext } from '@/Content/ThemContext'
import { useContext } from 'react'
export default function DarkModeToggle() {
    const {mode, Toggle} = useContext(ThemContext)
    
    return (
        <div className={styles.container} onClick={Toggle}>
            <div className={styles.icon}><CiDark /></div>
            <div className={styles.icon}><MdOutlineLightMode/></div>
            <div className={styles.switcher}

            style={ mode === "light" ? {left:"2px"} : { right:'2px'}}
            />
        </div>
    )
}