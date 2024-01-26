

import { FiGithub } from "react-icons/fi"
import { SlSocialLinkedin } from 'react-icons/sl'
import { ImPinterest2 } from 'react-icons/im'
import { GrLinkedin } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'

export const listIcon = [
  { title: "Linkidin", icon: <SlSocialLinkedin className=" hover:text-sky-500 hover:animate-pulse " />, id: 1, path: "https://linkedin.com/in/nasdev", },

  { id: 2, title: "github", icon: <FiGithub className=" hover:text-[#8030a3] hover:animate-bounce" />, path: 'https://github.com/nasrokamora', },
  { id: 3, title: 'pinterest', icon: <ImPinterest2 className=" hover:text-[#ba151b] hover:animate-ping" />, path: "https://pinterest.com/nasrokamora", },
]


export const listIconFooter = [
  {
    title: "Linkedin",
    icon: <GrLinkedin className="" />,
    id: 1,
    path:'https://linkedin.com/in/nasdev',
  },
  {
    title: "github",
    icon: <BsGithub />,
    id: 2,
    path:'https://github.com/nasrokamora',
  },
  {
    title: "pinterest",
    icon: <BsPinterest />,
    id: 3,
    path:'https://pinterest.com/nasrokamora'
  }
]

