import { AnimateNumbers } from "@/app/Components/DataPortfolio/AnimateNumber";
import Image from "next/image";
import Link from "next/link";
import { IdPageAnimate, IdImageAnimate } from "@/app/Animations/PortfolioAnimation";

async function getDataProduct(id){
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data from the API')
    }
    return await res.json()
}

export async function generateMetadata({params}){
    const product = await getDataProduct(params.id)
    return {
        title: product.title,
        discription: product.discription
    }
}


export default async function PostProduct({params}){

    const product = await getDataProduct(params.id)
    return (
    <IdPageAnimate>
        <section className=" h-[100vh] p-7 mt-6  md:h-auto">
            <div className="border-cyan-900 bg-cyan-900/30
            border-2 rounded-lg shadow-md shadow-cyan-900 md:border-neutral-300/30 md:shadow-zinc-950  md:bg-neutral-content  h-auto">
                <div className="Discription p-5 ">
                    <div className=" md:text-slate-950 md:mt-16 md:flex md:flex-col md:justify-center md:items-center flex justify-around items-center">
                    <h1 className=" order-2 text-[2.5rem]">
                       {product.title}
                    </h1>
                    <p className=" order-1 text-[2.5rem] "> <span>Brand :</span> {product.brand}</p>  
                    </div>
                    <div className=" gap-4 flex justify-around items-start mt-5 md:flex-col md:items-center">
                    <div className="   rounded-lg  w-[65%] h-60 md:h-36 relative object-cover aspect-auto">
                    <Image draggable='false' sizes="400px" priority={true} className=" border border-[#42a7c5] rounded-lg shadow-lg shadow-slate-950" src={product.thumbnail} fill={true} alt={product.title} />
                    </div>
                    <div className=" md:text-slate-950 flex justify-start flex-col flex-wrap text-xl">
                        <ul>
                            <li>
                                <span>Discription : </span>
                                {product.description}
                            </li>
                            <li>
                                <span>price : </span>
                                <span className=" text-amber-700"><AnimateNumbers  value={product.price} />$</span>
                            </li>
                            <li>
                                <span>Discount Percentage : </span>
                                <span className=" text-cyan-500">
                                <AnimateNumbers  value={product.discountPercentage}/>
                                </span>
                            </li>
                            <li>
                                <span>Rating : </span>
                                <span className=" text-red-950">
                                <AnimateNumbers  value={product.rating}/>
                                </span>
                            </li>
                            <li>
                                <span>Category : </span>
                                <span>{product.category}</span>
                            </li>
                        </ul>

                    </div>
                    </div>
                    <IdImageAnimate>
                    <div className=" flex justify-center mt-8 md:grid md:grid-cols-2 ">
                        {product.images.map((image,index) =>(
                            <div className=" flex gap-4 p-4 " key={index}>
                            <Image className=" md:border-slate-900 rounded-md shadow-lg shadow-slate-950 border border-[#42a7c5]"  
                                
                                draggable='false'
                                src={image}
                                alt={product.title}
                                width={200} height={150}
                            />
                            </div>
                        ))}
                    </div>
                    </IdImageAnimate>
                    <div className=" flex justify-end  rounded-lg">
                        <Link className=" btn transition duration-700 border-none hover:text-black  hover:bg-gradient-to-tr from-cyan-600 via-cyan-200 to-zinc-950 text-slate-500 shadow-md shadow-slate-950 btn-circle " href={'/portfolio'}>Go back</Link>
                    </div>
                </div>
            </div>
        

        </section>
    </IdPageAnimate>
    )
}