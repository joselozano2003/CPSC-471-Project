import { SignInButton, SignOutButton } from '@/components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import './pages.css'

export default function Home() {
    return (
		<div>
			<h1 className="welcome"> Welcome to the Hospital Database </h1>
			<SignInButton />
			<SignOutButton />

		
		</div>
    )
}
