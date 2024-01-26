
import Image from "next/image";
import { ListAboutMe } from "../Elements/InfoList";
import menAbout from '../../public/image/menAbout.png'
import {AboutImageAnimation, AboutListAnimation, AboutSectionAnimation } from "../Animations/AboutSectionAnimation";
import styles from './about.module.css' 



export const metadata = {
    title: 'About me',
}

export default  function  About(){
  
    return(
        <div className={`" w-[100%] h-[100vh] md:h-full 2xl:text-[1.5rem] 2xl:h-screen"`}>
            {/* <TransitionEffect /> */}
           <div className={` text-[2.5rem] flex justify-center items-center p-10 `}>
                <h1 className={` border-b   ${styles.title}`}>About me</h1>
           </div> 
           <div className="w-full flex justify-around items-center flex-wrap gap-4">
            <div className="w-[50%] md:w-full mt-[2rem] h-fit  order-2  md:p-8 p-3  ">
            <AboutSectionAnimation>
            <div className="   ">
                <h1 className=" text-[2rem] text-[#064f6c]"> Hello ! <span className=" text-[#bc5329]">I'm Nasreddine<span className="text-yellow-600">_@b</span></span></h1>
            I'm very passionate and dedicated to my work, with 17 years in computer experience as a 
                        professional web developer. I have aquired the skills necessary to build great and premium 
                        websites.
            </div>
            </AboutSectionAnimation>
            <div className=" pt-6">
            <AboutListAnimation>
           <div className="list ">
                <ul className="  grid gap-4  grid-flow-col-2">
                    {ListAboutMe.map(prev => (
                        <li key={prev.id} className="flex gap-3   
                        border-b border-b-slate-500 p-2  md:border-[#8b0000] md:border md:rounded-lg md:shadow-md md:shadow-[#8b0000] lg:border-[#be532c] lg:shadow-lg lg:border lg:rounded-lg lg:shadow-slate-900 xl:border xl:border-[#3e6bbd] xl:rounded-md xl:shadow-md xl:shadow-[#3e6bbd] 2xl:border 2xl:rounded-lg 2xl:border-fuchsia-950 2xl:text-2xl 2xl:shadow-lg 2xl:shadow-slate-900">
                           <label>{prev.title}
                            </label> 
                            {prev.name}
                        </li>
                    ))}
                </ul>
            </div>
            </AboutListAnimation> 
            </div>
            </div>
            <AboutImageAnimation>
            <div className="img order-1 ">
                <Image  className="w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px] lg:shadow-lg lg:bg-[#fcf9e8] lg:border-[#be532c] lg:shadow-[#be532c] border md:border-cyan-500
                bg-inherit  rounded  xl:shadow-[#3463a2] xl:border-[#3463a2] shadow-lg md:shadow-cyan-500 2xl:border-fuchsia-800 2xl:shadow-fuchsia-950 
                "  src={menAbout} width='auto' height='auto' alt="image_About_section" priority={true} style={{ color: "transparent" }} security='true' draggable='false' />
            </div>
            </AboutImageAnimation>
           </div>

           
        </div>
    )
}