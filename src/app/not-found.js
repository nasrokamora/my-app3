import Image from 'next/image'
import Link from 'next/link'
import ErroPage from '../public/image/404page.png'
export default function NotFound(){
    return(
        <div className=" 2xl:h-[84vh] md:flex-col-reverse h-screen text-[2rem] flex justify-center items-center m-auto  after:bg-current">
             
             <Image placeholder='blur' className=''  draggable="false" src={ErroPage} width={500} height="auto" priority='true' alt='404' />
             <div className='btn-404  after:contents after:bg-cyan-500 before:bg-yellow-500 '>
                <button className=' border rounded-md shadow-md shadow-slate-900 hover:text-yellow-500  '>
                <Link className=' p-4' href={'/'}>Go Back</Link>
                </button>
             </div>
             </div>
    )
}


