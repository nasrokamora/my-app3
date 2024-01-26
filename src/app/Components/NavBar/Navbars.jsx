import Link from 'next/link'
import { Links } from './data'
import NavBtn from './NavBtn'
import BtnContactNav from './BtnContactNav'
import styles from './Navbars.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { BlackOpsOne } from '@/app/Font'








export default function Navbars  () {

    return (
        <div className=' shadow-md shadow-cyan-700  h-auto  '>
        <div className='navbar flex justify-between items-center  2xl:flex 2xl:justify-around 
        h-auto p-4  xl:text-lg '>
            <div className='logo text-2xl flex justify-center items-center '>
                <Link className={`hover:text-yellow-500 2xl:text-[2rem] ${BlackOpsOne.className}  
                ${styles.linklogo}`} href={"/"}>Nas@Dev</Link>
            </div>
            <nav className='nav flex justify-between items-center space-x-4 '>
            <DarkModeToggle />
                <div className=' gap-4 flex md:hidden 2xl:text-[1.2rem]   '>
                    {Links.map(link => (<Link className={`  ${styles.linknav}
                      `} key={link.id} href={link.path} >{link.title}</Link>))}
                </div>
                <NavBtn />
                <BtnContactNav />
            </nav>

        </div>
        </div>
    )
}

