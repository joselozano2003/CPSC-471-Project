import Image from 'next/image';
import Link from 'next/link';
import waveLogo from "@/public/wave-icon.jpg"
import './Header.css'


export default function Header() {
  return (
		<div className='header-container flex flex-row justify-between w-full px-5'>
			<div className='logo-wrapper'>
				<Image src={waveLogo} alt='Wave Logo' width={50} height={50} className='mr-2' />
				<p className='logo-text'>patient care solutions.</p>
			</div>
			<div>
				<Link href={'/dashboard'}>
					<button className='btn btn-primary mt-5'>
						Go to Dashboard
					</button>
				</Link>
			</div>
		</div>
  )
}
