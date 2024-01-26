import style from './loading.module.css'



export default function Loading(){

    return(
        <div className=" flex justify-center items-center h-screen text-[2.5rem]  ">
            <h3 className={` animate-pulse `}>Loading... <span className={`${style.loader}`}></span></h3>
            
            
        </div>
    )
}