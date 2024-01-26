import './globals.css'
import Footer from '@/app/Components/Footer/Footer'
import Navbars from '@/app/Components/NavBar/Navbars'
import ThemProvider from '@/Content/ThemContext'
import localFont from 'next/font/local'
import Template from './template'






const RussoOne = localFont ({
  src: '../public/font/RussoOne-Regular.otf',
  weight: '400',
  style:'normal'
})


export const metadata = {
  title: "Nas@Dev",
  description:'personel portfolio using nextjs',
  generator:'Vercel',
  applicationName:'Nas@Dev Portfolio',
  referrer:'origin-when-cross-origin',
  keywords:['Next.js', 'React', 'JavaScript', 'Portfolio', 'NextJs 14', 'Framer-motion', 'tailwindcss', 'css', 'animation web', 'portfolio app', 'app NextJs','portfolio'],
  creator:'Nasreddine Abdellouche',
  publisher:'Nasreddine abdellouche',
  icons: {
    icon: "../app/favicon.ico"
  },

}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={RussoOne.className}>
        <ThemProvider>
          <Navbars />
          <Template>
          {children}
          <Footer/> 
          </Template>     
        </ThemProvider>
      </body>
    </html>
  )
}
