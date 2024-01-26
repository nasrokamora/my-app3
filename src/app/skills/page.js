
import Image from "next/image";
import TransitionEffect from "../Components/TransitionEffect/TransitionEffect";
import { cardData } from "../Components/SkillsData/CardData";
import { SkillDataAnim } from "../Components/SkillsData/SkillsData";
import dynamic from "next/dynamic";
// import AnimationImageSkill from "@/app/Components/SkillsData/AnimationImageSkill"
import ToggleButton from "../Components/Toggle/ToggleButton";







export const metadata = {
    title: 'Skills and Technique',
}


const AnimationImageSkill = dynamic(()=>import('@/app/Components/SkillsData/AnimationImageSkill'))
export default  function Skills() {
   

   
    return (
        
        <div className=" lg:selection:bg-[#3b82ef] selection:text-black selection:bg-cyan-500 h-auto w-full md:h-auto  xl:selection:bg-red-900 md:selection:bg-yellow-500 md:selection:text-black 2xl:text-[1.3rem] md:text-[1.3rem]  ">
           
            <div className="  ml-4 flex justify-start items-center">
                <h1 className=" pt-5 opacity-20 text-5xl relative">Skills</h1>
                <h1 className=" absolute text-2xl pt-5 w-fit h-fit"> My skills</h1>
            </div>
            {/* skills container */}
            <div className=" ">
                <div className=" items-center flex justify-center">
                    <SkillDataAnim />
                </div>
            </div>
            <div className="card_conainer grid lg:flex lg:justify-center lg:items-center  ">
                <div className=" lg:flex  lg:flex-col lg:w-[80%]
                card_team grid-cols-2 grid 2xl:grid-cols-5  xl:grid-cols-5 gap-x-3 p-7 overflow-hidden md:grid-cols-1 ">
                    {cardData.map((Data, index) => (
                        <div key={index} className="card flex flex-col items-center pt-5 lg:border-[#3b82f6]  space-y-3 border p-2  rounded-lg  shadow-slate-900 shadow-xl 
                         md:border-amber-500 xl:border-[#8b0000] border-cyan-500
                        ">
                            <div  className="icon text-[2rem] w-fit ">
                                {Data.icon}
                            </div>
                            <h2 className=" md:text-amber-600 xl:text-[#8b0000] text-cyan-500 lg:text-blue-500 overflow-hidden">
                                {Data.title}
                            </h2>
                            <p className=" text-sm text-center "> {Data.subtitle} </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" flex justify-center items-center pt-4">
                <h1 className=" outline-offset-1">Expert in this technical <br/> <span className=" flex justify-center ">web software</span> </h1>
            </div>
            <div className=" flex justify-center items-center p-5">
                <AnimationImageSkill/>

            </div>
            <ToggleButton />
        </div>
    )
}