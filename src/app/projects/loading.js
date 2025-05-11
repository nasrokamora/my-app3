import style from '../portfolio/portfolio.module.css'


export default function Loading(){

    return (

        <div className=' flex justify-center items-center h-screen'>

        <span className={style.loader}></span>
        </div>
    )
}