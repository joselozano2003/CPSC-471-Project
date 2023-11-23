'use client';


import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import { useEffect } from 'react';

export function SignInButton() {

    const router = useRouter();
    const { data: session, status } = useSession();
    console.log(session, status);
    

    //Had to re-write this because whenever router.push was called, console would log a warning:
    //router.push would potentially attempt to run that BEFORE finishing the rendering of the sign in button.
    //UseEffect runs AFTER rendering is finished so that fixes it
    useEffect(() => {

      if (status === 'authenticated') {
          router.push('/dashboard');
      }

    }, [status, router]);



    if (status === 'loading') {
      return <>...</>;
    }

    
    
  
    return <button className="btn btn-secondary"onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {

    return <button className="btn btn-primary"onClick={() => signOut({callbackUrl: "localhost:3000"})}>Sign out</button>;


}