import style from './portfolio.module.css'
import Link from "next/link";
import Image from "next/image";
import ToggleButtonPortfolio from '@/app/Components/Toggle/ToggleBtnPortfolio';
import { PortfolioAnimation } from '@/app/Animations/PortfolioAnimation';



export const metadata = {
    title: 'Portfolio',
}

async function getDataProduct(){
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data from the API')
  }
 return await res.json()
}

export default async function  Portfolio() {
  const data = await getDataProduct();
  const products = data.products

    return (
      <div className=" h-full w-full p-3  ">
          {/* container page portfolio */}
            <div className="Title_portfolio flex text-[1.2rem] md:text-[1.3rem] justify-center items-center p-2 m-6 2xl:text-[2rem] xl:text-[2rem]">
                    <h1 className=" text-transparent  bg-clip-text bg-gradient-to-br from-cyan-200 via-cyan-500 to-black
                    text-[2rem] md:text-[2.5rem] xl:text-[4rem] 2xl:text-[4rem] md:mb-24 mt-10" >Latest Works</h1>
            </div>     
                 {/* card container  */}
                    <PortfolioAnimation>

                <div className={`${style.cards} `}>
                  {/* map api data of products */}
                {products.map(product =>(                
                  <div key={product.id}
                   className={`  hover:border-purple-800 hover:border border hover:shadow-lg  hover:bg-transparent hover:shadow-purple-800 border-cyan-700/50  card shadow-md shadow-slate-950 bg-cyan-700/50 backdrop-blur-sm rounded-xl ${style.post}`}> 
                      <div className={` ${style.imagesCont}`}>
                        <Image fill={true}
                        className={style.images}
                        src={product.thumbnail}
                        alt={product.brand}
                        sizes={200}
                        placeholder='empty'
                        draggable='false'
                        />
                      </div>
                      {/* card body */}
                      <div className=' card-body'>
                        <h3 className=' card-title ptit  font-semibold'>{product.title}</h3>
                        <div className=' card-actions justify-end'>
                          <Link href={`/portfolio/${product.id}`} className='btn hover:btn-active hover:btn-secondary'>Read more</Link>
                        </div>
                      </div>
                  </div>
                ))}
                </div>
        </PortfolioAnimation>
                <ToggleButtonPortfolio />
        </div>
    )
}