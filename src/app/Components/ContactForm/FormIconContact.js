import { AiOutlinePhone, AiOutlineSkype } from 'react-icons/ai'
import { MdAlternateEmail } from 'react-icons/md'
import { LiaSearchLocationSolid } from 'react-icons/lia'
export const FormIconContact = [
    {
        icon: <AiOutlinePhone className=' w-fit text-[#5390ff] ' />,
        name: "Phone", subtitle: '+213670228131', path: "",subname:"Number",
    },
    {
        icon: <MdAlternateEmail className=' w-fit text-yellow-500' />,
        name: "Email", subtitle: "nanim2@outlook.fr", path: "https://www.gmail.com",subname:"Adresse",
    },
    {
        icon: <AiOutlineSkype className=' w-fit text-[#01afe6]' />,
        name: "Skype", subtitle: "213670228131", path: "https://www.skype.com"
    },
    {
        icon: <LiaSearchLocationSolid className=' w-fit text-[rgba(35,123,245)]' />,
        name: "Our Office", subtitle: "Algeria skikda", path: "https://www.googlemap.com"
    },
]