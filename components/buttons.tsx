'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Dashboard from './Dashboard';

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);
  
    if (status === 'loading') {
      return <>...</>;
    }
  
    if (status === 'authenticated') {


      //Do you want this to return an entirely new page? Or should we just return components? 
      return (

        <div> 

            <Dashboard> </Dashboard>
            
        </div>
        
      );


    }
  
    return <button className="btn btn-secondary"onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
    return <button className="btn btn-primary"onClick={() => signOut()}>Sign out</button>;
}