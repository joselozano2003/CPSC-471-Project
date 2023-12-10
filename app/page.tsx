import { SignInButton, SignOutButton } from '@/components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import './pages.css'
import homepageBackground from "public/medical-banner.jpg" // medical-banner.png : Image by <a href="https://www.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_30555907.htm#query=healthcare&position=2&from_view=search&track=sph&uuid=9c095130-d8a5-450b-8847-30346a22881b">Freepik</a>
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
