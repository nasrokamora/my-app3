import Image from 'next/image'
import Link from 'next/link'
import develop from "../public/image/developer.png"
import { listIcon } from '@/app/Elements/SocialIcon'
import TextAnimation from '@/app/Elements/TextAnimation'



export default function Home() {

  return (
    <main className=" h-[100vh] md:h-full  lg:mt-[10rem] xl:mt-[7rem] 2xl:mt-[10rem] lg:text-[1.2rem] 2xl:text-[1.4rem]">
      
      <div className=' flex justify-around mt-12 md:mt-6 md:flex md:justify-center md:flex-col md:items-center   '>
        <Image className='xl:w-[530px] xl:h-[400px]  2xl:w-[530px] 2xl:h-[450px] md:w-[350px] lg:w-[450px] lg:h-[400px] '
          src={develop} alt='image'
          width={350} height="auto" draggable={false}
          priority={true} />

        <div className='card-left w-auto flex flex-col 
         md:w-auto  lg:w-auto md:items-center  justify-center 
         '>
          <h1 className=' text-[2rem] xl:text-[3rem] 2xl:text-[1.75rem] lg:text-[1.75rem]
            w-fit '>
            Hello  !
          </h1>

          <h2 className=' text-[1.6rem] lg:text-[2rem] md:text-[1.5rem] w-fit xl:text-[2.5rem] 2xl:text-[2.5rem]'> I'am <b></b>
            <span className="text-yellow-600 w-fit">Nasreddine_</span><b></b><span className='text-cyan-700'>@ab</span>
          </h2>
          <div className='text-[2rem] md:text-[8vw] w-fit xl:text-[2.3rem] 2xl:text-[4vw]'>
            <TextAnimation />
          </div>
          <div className={` text-gray-500 md:p-4 md:text-center  2xl:pr-5`}>
            <p className=''>
              a passionate <span className=' text-yellow-600 '>front-end</span> developer with expertise in web development and <span className='text-[#0e7490]'>full stack</span> developer.
              <span className='  text-red-800'> Welcome to my corner of the web</span>, where I bring digital ideas to life through stunning user interfaces
              and seamless web experiences.
              Fond of creating web application designs
              and bring them to life using codes.
            </p>
          </div>

          <div className=' gap-3 mb-8 flex justify-around items-center mt-4 flex-row md:flex-wrap'>
            <div className=" shadow-md shadow-slate-900  rounded-full border border-l-gray-500 border-b-[#8b0000] border-t-[#ca8a04] 
            border-r-[#0e7490] w-fit flex justify-center items-center 
            xl:text-2xl mt-1 md:mt-0 ">
              <div className=' text-gray-500 text-center p-2  '>
                <h1>Social media</h1>
                {/* <SocialMediaAnimation /> */}
              </div>
              <div className=' text-gray-500 flex justify-center items-center  gap-4 p-2'>
                {listIcon.map(link =>
                  <Link target='_blanck' href={link.path} key={link.id}>{link.icon}</Link>
                )}
              </div>
            </div>
            <div className='404'>
              <div className={`' p-2  text-gray-500 overflow-hidden link_404 shadow-md shadow-slate-900  rounded-full border border-l-gray-500 border-b-[#8b0000] border-t-[#ca8a04] 
            border-r-[#0e7490]  flex justify-center items-center 
            xl:text-2xl mt-1 md:mt-0 `}>
                <Link className='duration-500 hover:bg-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ca8a04] via-cyan-800 to-red-900 hover:text-transparent hover:animate-pulse'
                  href={'/not-found'}>Test Page 404</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>


  )
}
