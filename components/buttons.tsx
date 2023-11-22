'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);
  
    if (status === 'loading') {
      return <>...</>;
    }
  
    if (status === 'authenticated') {
      return (
        <Link href={`/dashboard`}>
          <p>Dashboard</p>
        </Link>
      );
    }
  
    return <button className="btn btn-secondary"onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
    return <button className="btn btn-primary"onClick={() => signOut()}>Sign out</button>;
}