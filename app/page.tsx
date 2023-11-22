import { SignInButton, SignOutButton } from '@/components/buttons'
import Image from 'next/image'

export default function Home() {
    return (
		<div>
			<p>Hello</p>
			<SignInButton />
			<SignOutButton />
		</div>
    )
}
