import './globals.css'
import Footer from '@/app/Components/Footer/Footer'
import Navbars from '@/app/Components/NavBar/Navbars'
import ThemProvider from '@/Content/ThemContext'
import localFont from 'next/font/local'
import Template from './template'
import JsonLdSchema from './Components/Seo/JsonLdSchema'
import openGraphPortfolio from '../public/OpenGraph-image-portfolio.jpg'





const RussoOne = localFont({
  src: '../public/font/RussoOne-Regular.otf',
  weight: '400',
  style: 'normal'
})


export const metadata = {
  title: 'Nas@Dev Portfolio',
  description: 'Discover the personal portfolio of Nasreddine Abdellouche — a passionate full-stack developer building modern web experiences using Next.js, Tailwind, and more.',
  generator: 'Vercel',
  applicationName: 'Nas@Dev Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', "web site", 'React', 'JavaScript', 'Portfolio', 'NextJs 14','NextJs 15','Next.js', 'Framer-motion', 'tailwindcss', 'css', 'animation web', 'portfolio app', 'app NextJs', 'portfolio', "kinde-auth", "next-auth", "nextjs portfolio", "portfolio website", "developer portfolio", "web developer portfolio", "web developer portfolio website", "developer portfolio website", "portfolio website nextjs", "portfolio website react", "portfolio website javascript", "portfolio website app", "portfolio website application", 'personal portfolio', 'personal portfolio website', 'personal website', 'personal web application', 'personal web developer', 'portfolio website', 'website', 'web developer', 'developer', 'web design', 'web application', 'front-end developer', 'full stack developer', 'developer portfolio', 'portfolio website',
    "Nas@Dev",
    "Nasreddine Abdellouche",
    "Magix Movies", "Magix Movies website", "Magix Movies app", "Magix Movies application",
    "Magix-Movies", "magix-movies", "magix-movies nasreddine ab ", "nasreddine AB magix movies",
    "project nasreddine ab", "project nasreddine abdellouche",
  ],
  authors: [
    {
      name: 'Nasreddine Abdellouche',
      url: 'https://nasreddine-abdellouche.vercel.app/'
    }
  ],
  publisher: 'Nasreddine Abdellouche',
  openGraph: {
    title: 'Nas@Dev Portfolio',
    description: 'Discover the personal portfolio of Nasreddine Abdellouche — a passionate full-stack developer building modern web experiences using Next.js, Tailwind, and more.',
    url: 'https://nasreddine-abdellouche.vercel.app/',
    siteName: 'Nas@Dev Portfolio',
    images: [
      {
        url: 'https://nasreddine-abdellouche.vercel.app/OpenGraph-image-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Nas@Dev Portfolio OpenGraph Image',
      },
    ],
    locale: 'ar-DZ',
    type: 'website',
  },
  metadataBase: new URL('https://nasreddine-abdellouche.vercel.app/'),
  alternates: {
    canonical: '/',
  },

  creator: 'Nasreddine Abdellouche',
  publisher: 'Nasreddine abdellouche',
  icons: {
    icon: "../app/favicon.ico"
  },

}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLdSchema />
      </head>
      <body className={RussoOne.className}>
        <ThemProvider>
          <Navbars />
          <Template>
            {children}
            <Footer />
          </Template>
        </ThemProvider>
      </body>
    </html>
  )
}
