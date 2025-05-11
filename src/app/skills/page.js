import { cardData } from "../Components/SkillsData/CardData"
import { SkillDataAnim } from "../Components/SkillsData/SkillsData"
import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import ToggleButton from "../Components/Toggle/ToggleButton"
import AnimationImageSkill from "@/app/Components/SkillsData/AnimationImageSkill"
import { BlurFade } from "@/components/magicui/blur-fade"

export const metadata = {
  title: "Skills and Technique",
}

export default function Skills() {
  return (
    <div className="lg:selection:bg-[#3b82ef] selection:text-black selection:bg-cyan-500 h-auto w-full md:h-auto xl:selection:bg-red-900 md:selection:bg-yellow-500 md:selection:text-black 2xl:text-[1.3rem] md:text-[1.3rem]">
      <div className="ml-4 flex justify-start items-center">
        <h1 className="pt-5 opacity-20 text-5xl relative">Skills</h1>
        <h1 className="absolute text-2xl pt-5 w-fit h-fit">My skills</h1>
      </div>
      {/* skills container */}
      <div className="">
        <div className="items-center flex justify-center">
          <SkillDataAnim />
        </div>
      </div>
      <div className="card_container grid lg:flex lg:justify-center lg:items-center xl:m-4 ">
        <div
          className="lg:grid lg:flex-wrap 
                card_team grid-cols-2 grid 2xl:grid-cols-3 2xl:grid-rows-2 2xl:col-span-full 2xl: xl:grid-cols-2 gap-x-3  overflow-hidden md:grid-cols-1"
        >
          {cardData.map((Data, index) => (
            <Card
              key={index}
              className="flex flex-col  dark:bg-[#0c0015] md:gap-0 gap-0 items-center pt-5 lg:border-[#3b82f6] space-y-3 p-2 rounded-lg shadow-slate-900 shadow-xl 
                        m-3  lg:gap-0  md:border-amber-500 xl:border-[#8b0000] border-cyan-500 "
            >
              <CardHeader className="p-2">
                <div className="icon text-[2rem] w-fit mx-auto dark:text-white xl:text-5xl 2xl:text-5xl">{Data.icon}</div>
              </CardHeader>
                <CardTitle>
                <h2 className="md:text-amber-600 xl:text-2xl 2xl:text-2xl xl:font-light xl:text-[#8b0000] text-cyan-500 lg:text-blue-500 overflow-hidden">
                  {Data.title}
                </h2>
                </CardTitle>
              <CardContent className="p-2 flex flex-col items-center space-y-2 ">
                <p className="text-sm text-center dark:text-white" >{Data.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <section id="header" className=" flex w-full justify-center items-center pt-4 flex-col">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-wider 2xl:text-5xl/none sm:text-2xl xl:text-5xl/none">
        Proficiency in 
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-pretty text-2xl tracking-wide sm:text-xl xl:text-4xl/none">
        Relevant Technologies
        </span>
      </BlurFade>
    </section>
      <div className="flex justify-center items-center p-5">
        <AnimationImageSkill />
      </div>
      <ToggleButton />
    </div>
  )
}
