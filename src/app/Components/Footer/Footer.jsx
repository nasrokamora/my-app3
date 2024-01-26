import {BlackOpsOne} from '@/app/Font'
import styles from './footer.module.css'
import {FaRegCopyright} from 'react-icons/fa'
import { listIconFooter } from '@/app/Elements/SocialIcon'
import Link from 'next/link'






export default function Footer ()  {
  return (
    <div className={` bg-transparent shadow-2xl shadow-[#8b0000]  md:bg-transparent md:shadow-2xl md:shadow-[#8b0000] m-auto p-4 flex justify-evenly items-center w-full h-[80px] lg:justify-evenly `}>

      <div className={`${styles.title} flex  justify-start  gap-2 md:flex md:items-center md:gap-2 md:justify-center md:w-full
       xl:text-[1.2rem] 2xl:text-[1.5rem] 
      `}>
        <Link href={"/"} className={`${BlackOpsOne.className} ${styles.title} text-[#8b0000]`}>Nas@dev</Link>
        <div className= 'iconfooter flex items-center justify-between w-auto  space-x-1 md:text-gray-500'> <p>Copyright</p> 
        <FaRegCopyright/>
        </div>
        <div>
      <p className=' md:text-gray-500'>2023 
       All rights reserved.</p>

        </div>
      </div>
      <div className='icon flex items-center gap-3 md:hidden text-xl 2xl:text-2xl'>
        {listIconFooter.map(prev => <Link href={prev.path} key={prev.id}>{prev.icon}</Link>)}
      </div>
      
      </div>


  )
}

