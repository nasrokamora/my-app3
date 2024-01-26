import FormContact from "@/app/Components/ContactForm/FormContact"
import { FormIconContact } from "@/app/Components/ContactForm/FormIconContact"
import Link from "next/link"
import ToggleButton from "../Components/Toggle/ToggleButton"
import { AnimateContactForm , AnimateTitleContact } from "../Animations/AnimationContact"


export  const metadata ={
    title: 'Contact'
}


export default function Contact(){

    return(
        <div className=" h-[100vh]  mt-10     md:p-0 md:m-0 md:mt-4 md:h-auto ">
            <ToggleButton />
            {/* animation title with framer_Motion  */}
            <AnimateTitleContact> 
            <div className="title flex justify-center items-center text-[2.5rem]  md:mt-12">
                <h1 className=" md:mt-10 border-b border-b-cyan-500 after:border-b md:tracking-[0.3rem]">Get in Touch </h1>
                </div>
                </AnimateTitleContact>
                <div className=" grid grid-cols-2 gap-5 grid-flow-row md:flex md:flex-col mt-24 ">
            <AnimateContactForm>
            <div className="form  md:m-4  md:mt-4 ml-4 ">
                <div className=" mb-3 md:mb-10 flex justify-center items-center text-xl md:mt-3 md:space-x-4  ">
                <h1 className="border-b border-b-[#8b0000]">Contact Me</h1>
                </div>
                <div className=" bg p-2 rounded-md  backdrop-blur-md bg-white bg-opacity-30
                 border shadow-md  shadow-yellow-500/30 2xl:bg-none 2xl:backdrop-blur-0
                ">
                <FormContact />
                </div>
            </div>
            </AnimateContactForm>
            <div className="title_contact   ">
                <div className="flex justify-center items-center">
                <h1 className="border-b border-b-[#8b0000]">Contact information</h1>
                </div>
                <div className=" p-7 2xl:mt-6 xl:mt-6 lg:mt-6  icon_contact grid grid-cols-2 gap-5 lg:p-6  grid-flow-row ">
                    {FormIconContact.map((form,index)=>(
                        <div className=" xl:border-slate-800 xl:shadow-slate-900 border rounded-md border-yellow-600 shadow-md shadow-yellow-600 p-3 lg:p-2 lg:border-none flex justify-center flex-col items-center overflow-hidden gap-[0.15rem] md:overflow-auto " key={index}>
                            <div className=" text-[2rem] ">{form.icon}</div>
                            <h2 className="md:tracking-[0.09rem] md:flex md: md:justify-center md:items-center  ">{form.name} {form.subname} </h2>
                            <Link className="" href={form.path}>{form.subtitle}</Link>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}