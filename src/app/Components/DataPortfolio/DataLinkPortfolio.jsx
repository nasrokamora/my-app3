"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { IoImagesOutline } from 'react-icons/io5'
import { IoMdImages } from 'react-icons/io'
import { PiMagicWandLight } from 'react-icons/pi'
import { DataCard } from './Cards'
import { motion } from 'framer-motion'
import { AllCardsAnimation } from '@/app/Animations/PortfolioAnimation'
import { AnimateNumber } from './Card'
import { MdAllInbox } from 'react-icons/md'


export default function DataLinkPortfolio() {
    const ref = useRef()
    const [selected, setSelected] = useState([...DataCard])
    const subsets = {
        subset2: DataCard.slice(1, 3),
        subset3: DataCard.slice(3, 5)
    }
    const handleLinkClick = (subsetKey) => {
        setSelected(subsets[subsetKey])

    }
    return (
        <div className="data_portfolio md:mt-16 flex justify-around items-center flex-col">
            <div className='flex justify-center items-center text-[1.5rem] m-6 gap-4'>
                <div className=' flex gap-4 text-sm '>
                    <button type='button' className=' border-2 border-[#01c6d9] hover:border-[#361d54]  duration-100  
                rounded-full p-2 gap-3 shadow-md shadow-teal-950 hover:bg-gradient-to-r from-teal-200 via-cyan-500 to-red-500 
                text-transparent bg-clip-text transition-colors'
                        onClick={() => setSelected(...[DataCard])} >All</button>
                    <button type='button' onClick={() => handleLinkClick('subset2')} className='' >Web development</button>
                    <button type='button' onClick={() => handleLinkClick('subset3')} className=' hover:border-[#361d54]  shadow-md shadow-cyan-500 duration-100 border-2 border-[#01c6d9] p-2 rounded-full hover:shadow-[#361d54] '> Ui/Ux Design</button>
                </div>
            </div>

            {selected && (
                <div
                    className=" flex justify-center flex-wrap   gap-4">
                    {selected.map((card, index) => (
                        <AllCardsAnimation key={index} >
                            <div className=' flex flex-col justify-center card w-96 glass'> 
                            <h1 className='card-title  flex justify-center p-2'>
                                {card.title}
                            </h1>
                            
                            <figure> <Image
                                     width={"auto"} height={250} className='  object-content rounded-md shadow-md shadow-[#0c0016]' src={card.src} alt={card.title} priority={true} /></figure>

                                <div className=' card-actions justify-end  text-4xl'>
                                    <AnimateNumber className=" w-fit" value={card.value} />+</div>
                            </div>
                            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Read more</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4 text-slate-900">{card.article}</p>
                                    <div className="modal-action">
                                    <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                    </form>
                                    </div>
                                    </div>
                                </dialog>
                        </AllCardsAnimation>
                    ))}

                </div>
            )
            }
        </div>
    )
}
