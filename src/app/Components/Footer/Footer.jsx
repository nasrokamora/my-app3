import { BlackOpsOne } from '@/app/Font'
import styles from './footer.module.css'
import { FaRegCopyright } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import nasdev from '../../../public/image/nas_dev.png'
import { SiLinktree } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer() {
  return (

    <footer className=" footer gap-0 items-center p-4 text-center  bg-transparent shadow-2xl shadow-[#8b0000]   md:shadow-2xl  m-auto  flex justify-evenly  w-full lg:justify-evenly xl:text-[1.2rem] dark:text-gray-500  2xl:text-[1.5rem]  text-black  md:text-[1.1rem] md:flex-wrap md:p-2">
      <aside className="grid-flow-col items-center md:flex md:justify-center md:gap-2 md:p-2 md:flex-wrap">
        <Link href={"https://github.com/nasrokamora"} target='_blank' className='md:active:scale-95 md:transition-transform md:duration-200 md:hover:scale-105 hover:animate-pulse'>
          <Image src={nasdev} 
          alt="logo" 
          width={60} 
          height={60} className={`rounded-full ${styles.logo}`}  
          draggable={false} 
          placeholder='blur'/>
        </Link>
        <div className='iconfooter  flex items-center justify-between w-auto  space-x-1 '> <p>Copyright</p>
          <FaRegCopyright />
        </div>
        <p> 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:flex md:gap-3 md:p-2  ">
        <Link href={'https://www.linkedin.com/in/nasdev'} target='_blank' className='text-blue-500 hover:animate-pulse hover:scale-105'>
          <FaLinkedin size={30} className='' />
        </Link>
        <Link href={'https://linktr.ee/nasreddine_ab'} target='_blank' className='text-green-500 hover:animate-pulse' >
          <SiLinktree size={30} />
        </Link>
        <Link href={'https://github.com/nasrokamora'} target='_blank' className='dark:text-gray-300 text-black  hover:animate-pulse hover:scale-105'>
          <FaGithub size={30} />
        </Link>
        <Link href={'tel:+213670228131'} target='_blank' className='dark:text-gray-200 text-slate-700  hover:animate-pulse hover:scale-105'>
          <FaPhoneAlt size={30} />
        </Link>
        <Link href={"https://wa.me/+213670228131"} target='_blank' className='text-green-600   hover:animate-pulse hover:scale-105'>
          <FaWhatsapp size={30} />
        </Link>
        <Link href={'mailto:nas_dev@outlook.com'} target='_blank' className='dark:text-red-600 text-red-700  hover:animate-pulse hover:scale-105'>
          <AiOutlineMail size={30} />
        </Link>
        

      </nav>
    </footer>
  )
}

