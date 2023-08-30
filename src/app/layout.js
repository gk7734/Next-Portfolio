import './globals.css'
import {Sora} from '@next/font/google'

// font setting
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'GK\s Portfolio',
  description: 'Portfolio by 주강현',
}

// components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
import Image from "next/image";
import Eximg from "../../public/site-bg.png"

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`page text-white bg-cover bg-no-repeat ${sora.variable}
       font-sora relative`}>
        <Image className='overflow-hidden absolute -z-50' src={Eximg} alt='bg-img' fill />
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  )
}
