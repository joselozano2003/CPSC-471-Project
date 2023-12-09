import { SignInButton, SignOutButton } from '@/components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import './pages.css'
import homepageBackground from "public/welcome-page.jpg"


export default function Home() {

	const bgStyling = {
        backgroundImage: `url(${homepageBackground.src})`,
        backgroundSize : "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    
    }
    return (
		

		<div>
			<div className="background-wrapper" style={bgStyling}>
      <div className="homepage-container">
      <h1 className="welcome"> Welcome to the Hospital Database </h1>
			<div className="button-container">
      <SignInButton />
			<SignOutButton />
      </div>
      </div>
      </div>
      
			
      

		
		</div>
    )
}
