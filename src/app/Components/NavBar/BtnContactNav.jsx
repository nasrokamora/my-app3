import Link from 'next/link'
import React from 'react'
import styles from './Navbars.module.css'
export default function BtnContactNav  () {
  return (
    <div className='BtnContactNav md:hidden'>
        <button type='button' id={styles.btn}>
            <Link className=' 2xl:text-[1.2rem] ' href={'/contact'} >Contact Me</Link>
        </button>
    </div>
  )
}

