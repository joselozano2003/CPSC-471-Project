'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import './Banner.css'
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import { useEffect } from 'react';
import React from 'react'
import { SignInButton, SignOutButton } from '@/components/buttons'
import homepageBackground from "public/medical-banner.jpg"

interface BannerProps {
  backgroundImage: string;
}

export default function Banner(props: BannerProps) {
    const bgStyling = {
        backgroundImage: `url(${homepageBackground.src})`,
        backgroundSize : "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
    }
  return (
    <div className="background-wrapper" style={bgStyling}>
      <div className="homepage-container">
      <h1 className="welcome"> WELCOME TO THE HOSPITAL DATABASE</h1>
			<div className="button-container">
      <SignInButton />
			<SignOutButton />
      </div>
      </div>
      </div>
  )
}
