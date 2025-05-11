import Link from "next/link";
import Image from "next/image";
import ToggleButtonPortfolio from '@/app/Components/Toggle/ToggleBtnPortfolio';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import magix_image from '../../public/image_MagixMovies.jpg'
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ShineBorder } from "@/components/magicui/shine-border";
import { FaGithub, FaMagic } from "react-icons/fa";
import NasDev_screenshot from '../../public/image/openGraph-nasdev.jpg'
import { SparklesText } from "@/components/magicui/sparkles-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { MdBuild } from "react-icons/md";
import ProjectIcon from "../Components/Icon/ProjectIcon";
import MagixMoviesIcon, { PortfolioIcon } from "../Components/Icon/MagixMoviesIcon";
import hotelIcon from '../../public/BookNextLogo.png'
import MagixImageNative from "../../public/magixMoviesReactNativeImage.jpg"
import Hr_Management from "../../public/logo_HR_Management_app.jpg"
import { FaTools } from "react-icons/fa";

export const metadata = {
    title: 'Projects | Nas@Dev',
    description: 'Full-stack projects by Nasreddine Abdellouche: movie streaming platforms, hotel booking websites, and React Native mobile apps. Explore my development portfolio.',
    keywords: ['web development', 'full-stack', 'React', 'Next.js', 'portfolio', 'projects', 'React Native', 'mobile apps'],
    openGraph: {
        title: 'Projects | Nas@Dev',
        description: 'Full-stack projects by Nasreddine Abdellouche: movie streaming platforms, hotel booking websites, and React Native mobile apps. Explore my development portfolio.',
        url: 'https://nasreddine-abdellouche.vercel.app/projects',
        siteName: 'Nas@Dev Portfolio',
        locale: 'en-DZ',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Projects | Nas@Dev',
        description: 'Full-stack projects by Nasreddine Abdellouche: movie streaming platforms, hotel booking websites, and React Native mobile apps. Explore my development portfolio.',
        creator: 'Nasreddine AB',
      },
      alternates: {
        canonical: 'https://nasreddine-abdellouche.vercel.app/projects'
      },
};


export default function Projects() {


    return (
        <div className=" h-auto w-[100%] p-3 md:h-auto relative overflow-hidden xl:h-auto">


            <div className="Title_portfolio flex justify-center items-center p-2 m-6">
                <h1 className="bg-gradient-to-r from-[#5b38f8] md:text-center to-[#00fff2] text-transparent bg-clip-text text-[2rem] md:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem]">Featured Projects</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 p-2">
                {/*  multiple projects */}
                <Card className="w-full border-none h-full bg-white/10 backdrop-blur dark:text-white  text-black hover:bg-[#0c0015]/90 hover:text-white duration-300   hover:scale-105 shadow-lg">
                    <CardHeader>
                        <CardTitle className=" leading-6 font-light bg-gradient-to-r from-[#d6220f] via-[#760c23] to-white text-transparent bg-clip-text ">Magix Movies</CardTitle>
                        <CardDescription>Discover premium movie and series insights with in-depth.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center">
                        <Link href={'https://magix-movies.vercel.app/'} target="_blank" rel="noopener noreferrer">
                            <Image src={magix_image}
                                width={400}
                                height={'auto'}
                                alt={"Movies & TV Shows Website"}
                                placeholder="blur"
                            />
                        </Link>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center gap-4 hover:text-[#A07CFE] transition duration-300 ease-in-out">
                        <MagixMoviesIcon />
                    </CardFooter>
                </Card>


                <Card className="w-full border-none h-full bg-white/10 backdrop-blur dark:text-white  text-black hover:bg-[#0c0015]/90 hover:text-white duration-300   hover:scale-105 shadow-lg">
                    <CardHeader>
                        <CardTitle className=" leading-6 font-light bg-gradient-to-r from-[#0093bc] via-[#1d4587] to-[#00f6f2] dark:to-via-[#00f6f2] dark:to-white text-transparent bg-clip-text ">Nas@Dev Portfolio</CardTitle>
                        <CardDescription>A modern developer portfolio showcasing full-stack projects, skills, and creative UI/UX design.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center">
                        <Link href={'https://nasreddine-abdellouche.vercel.app/'} target="_blank" rel="noopener noreferrer">
                            <Image src={NasDev_screenshot}
                                width={400}
                                height={"auto"}
                                alt={"Movies & TV Shows Website"}
                                placeholder="blur"
                                className="rounded-lg"/>
                        </Link>
                    </CardContent>
                    <CardFooter className="flex flex-wrap justify-center items-center gap-4 text-white text-3xl">
                        <PortfolioIcon />

                    </CardFooter>
                </Card>



            </div>
            {/* More Projects Section */}
            <div className="my-16">
                <h2 className="text-[2rem] md:text-[2.5rem] xl:text-[2.2rem] 2xl:text-[2.2rem] md:mb-4 mb-6 text-center text-transparent  bg-clip-text bg-gradient-to-br from-[#fffb02] via-teal-500 to-black">
                    More Projects Coming Soon
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-2 md:grid-cols-1">
                    <Card className="bg-white/10 text-white border-none shadow-lg hover:bg-[#0c0015]/90 transition duration-300 ease-in-out transform hover:scale-105">
                        <CardHeader>
                            <CardTitle className="text-lg font-light bg-gradient-to-tr from-yellow-500 dark:to-white to-black bg-clip-text text-transparent">Hotel Booking Website</CardTitle>
                            <CardDescription>
                                Full-stack hotel booking platform with dynamic room availability and payment integration.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center items-center h-[180px] bg-black/20 rounded-md gap-3 md:flex-col">
                            <Image src={hotelIcon} alt="Hotel Booking Website" width={100} height={100} className="rounded-full " />
                            <p className="text-muted-foreground italic">Work in progress...</p>
                        </CardContent>
                        <CardFooter className="flex flex-wrap justify-center gap-2 text-sm border-t border-white/10 pt-2">
                            <span className="dark:text-[#38bdf8] text-black">Next.js</span>
                            <span className="text-[#0ea5e9]">Tailwind</span>
                            <span className="text-[#facc15]">More...</span>
                        </CardFooter>
                    </Card>

                    <Card className="bg-white/10 text-white border-none shadow-lg hover:bg-[#0c0015]/90  duration-300  hover:scale-105">
                        <CardHeader>
                            <CardTitle className="text-lg font-light bg-gradient-to-r from-[#d6220f] via-[#760c23] to-white text-transparent bg-clip-text ">Magix Movies Mobile</CardTitle>
                            <CardDescription>
                                Mobile app version using React Native and Expo for cross-platform streaming.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center items-center h-[180px] bg-black/20 rounded-md gap-3 md:flex-col">
                            <Image src={MagixImageNative}
                            alt="Magix Movies Mobile"
                            width={100}
                            height={"auto"}
                            className="rounded-full" />
                            <p className="text-muted-foreground italic">Coming soon...</p>
                        </CardContent>
                        <CardFooter className="flex flex-wrap justify-center gap-2 text-sm border-t border-white/10 pt-2">
                            <span className="text-[#61dafb]">React Native</span>
                            <span className="text-[#02b7ff]">Expo</span>
                            <span className="text-[#ff0203]">TMDB API</span>
                        </CardFooter>
                    </Card>

                    <Card className="bg-white/10 text-white border-none shadow-lg hover:bg-[#0c0015]/90  duration-300  hover:scale-105">
                        <CardHeader>
                            <CardTitle className="text-lg font-light bg-gradient-to-r from-[#498d69] to-[#063d48]  text-transparent bg-clip-text ">HR Management</CardTitle>
                            <CardDescription>
                                A comprehensive HR management system for employee tracking and payroll management.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center items-center h-[180px] bg-black/20 rounded-md gap-3 md:flex-col">
                            <Image src={Hr_Management}
                            alt="Magix Movies Mobile"
                            width={100}
                            height={"auto"}
                            className="rounded-full" />
                            <p className="text-muted-foreground italic">Coming soon...</p>
                        </CardContent>
                        <CardFooter className="flex flex-wrap justify-center gap-2 text-sm border-t border-white/10 pt-2">
                            <span className="text-[#61dafb]">Next.js</span>
                            <span className="text-[#ff0203]">Nest.js</span>
                            <span className="text-[#facc15]">PostgreSQL</span>
                            <span className="text-[#324dc5]">Prisma</span>
                            <span className="text-[#02afff]">more...</span>
                        </CardFooter>
                    </Card>

                    <Card className="bg-gradient-to-br from-[#1f1428] to-[#0c0015]  border-white/20 text-white flex items-center justify-center h-[300px] md:flex-col">
                        <p className="text-muted-foreground  italic flex justify-start items-center gap-3 animate-pulse md:flex-col text-center">Stay tuned for more awesome builds <MdBuild className='md:hidden' /> 
                        </p>
                        <FaTools className='text-gray-500 text-xl lg:hidden xl:hidden 2xl:hidden' />
                    </Card>
                </div>
            </div>
            <ToggleButtonPortfolio />

        </div>
    )
}