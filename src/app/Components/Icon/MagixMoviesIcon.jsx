import Image from 'next/image'

import NextSVG from "../../../public/IconSVG//nextjs-icon-svgrepo-com.svg"
import Cloudinary from "../../../public/IconSVG/cloudinary-svgrepo-com.svg"
import zodSVG from "../../../public/IconSVG/zod-seeklogo.svg"
import NestJs from "../../../public/IconSVG/nestjs-seeklogo.svg"
import tmdbSVG from "../../../public/IconSVG/tmdb.svg"
import FramerMotionSVG from "../../../public/IconSVG/framer-logo-thin-svgrepo-com.svg"
import MagicSVG from "../../../public/IconSVG/gui-magic-svgrepo-com.svg"
import ShadcnSVG from "../../../public/IconSVG/shadcn-ui-seeklogo.svg"
import RedisSVG from '../../../public/IconSVG/redis-logo-svgrepo-com.svg'
import UpstashSVG from '../../../public/IconSVG//upstash-seeklogo.svg'
import TailwindSVG from '../../../public/IconSVG/tailwindcss-icon-svgrepo-com.svg'


export const IconSVG = [
    {
        id: 1,
        icon: NextSVG,
        title: "Next.js"
    },
    {
        id: 2,
        icon: TailwindSVG,
        title: "Tailwind CSS"
    },
    {
        id: 3,
        icon: Cloudinary,
        title: "Cloudinary"
    },
    {
        id: 4,
        icon: zodSVG,
        title: "Zod"
    },
    {
        id: 5,
        icon: tmdbSVG,
        title: "TMDB API"
    },
    {
        id: 6,
        icon: FramerMotionSVG,
        title: "Framer Motion"
    },
    {
        id: 7,
        icon: MagicSVG,
        title: "Magic UI"
    },
    {
        id: 8,
        icon: ShadcnSVG,
        title: "Shadcn UI"
    },
    {
        id: 9,
        icon: RedisSVG,
        title: "Redis"
    },
    {
        id: 10,
        icon: UpstashSVG,
        title: "Upstash Redis",
    },
    {
        id: 11,
        icon: NestJs,
        title: "Nest.js"
    },
]

const seceltedIdsIcons = [1,2, 6, 7, 8]
const selectedIdIconsProjects =[1, 2, 4, 6, 7, 8, 11 ]
 

export default function MagixMoviesIcon() {
    return (
        <div className=" flex justify-center items-center gap-4 mt-2 mb-2 flex-wrap ">
            {IconSVG.slice(0,-1).map((icon) => (
                <div key={icon.id}>
                    <Image    
                        src={icon.icon}
                        alt={icon.title}
                        width={34}
                        height={"auto"}
                        title={icon.title}
                        
                    />
                </div>



            ))}
        </div>
    )
}


export function PortfolioIcon(){
    return(
        <div className='flex justify-center items-center gap-4 mt-2 mb-2 flex-wrap'>
            {IconSVG.filter((icon) => seceltedIdsIcons.includes(icon.id)).map((icon) => (
                <div key={icon.id}>
                    <Image    
                        src={icon.icon}
                        alt={icon.title}
                        width={34}
                        height={34}
                        title={icon.title}
                        
                    />
                </div>
            ))}
        </div>
    )
}

export function IconProjects(){
    return(
        <div>

        </div>
    )
}