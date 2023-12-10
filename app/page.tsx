import { SignInButton, SignOutButton } from '@/components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import './pages.css'
import homepageBackground from "public/medical-banner.jpg"
import Header from '@/components/Header'
import Banner from '@/components/Banner'


export default function Home() {

	const bgStyling = {
        // backgroundImage: `url(${homepageBackground.src})`,
        // backgroundSize : "100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundImage: `url(${homepageBackground.src})`,
        backgroundSize : "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
    
    }
    return (
		

      <div className='flex flex-col items-center h-screen'>
      <Header />
      <Banner backgroundImage={''} />
      <h2 className='mt-auto mb-auto footer-text'>An Efficient Approach to Healthcare Services.</h2>
    </div>
    )
}
