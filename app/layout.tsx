import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Hospital Database',
	description: 'medical system database to record patient and staff data',
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
			<html lang="en">
				<body className={inter.className}>
					{children}
				</body>
			</html>
	)
}
