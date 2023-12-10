'use client';


import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import { useEffect } from 'react';
import React from 'react'
import waveLogo from "public/wave-icon.jpg"
import './Header.css'


export default function Header() {
  return (
    <div className='header-container'>
        <div className='logo-wrapper'>
        <Image src={waveLogo} alt='Wave Logo' width={50} height={50} className='mr-2' />
        <p className='logo-text'>patient care solutions.</p>
        </div>
    </div>
  )
}
