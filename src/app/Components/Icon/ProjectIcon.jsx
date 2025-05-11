import { FaMagic } from "react-icons/fa";
import { SiNextdotjs,  SiTailwindcss,   } from "react-icons/si";




export default function ProjectIcon() {
    return (
        <div className=" flex justify-center items-center gap-4 mt-2 mb-2">
            <SiNextdotjs title="Next.js" />
            {/* Tailwind CSS */}
            <SiTailwindcss className="text-[#38bdf8]" title="Tailwind CSS" />
            <FaMagic title="Magic UI" />
            {/* <SiShadcnui /> */}
        </div>
    )
}