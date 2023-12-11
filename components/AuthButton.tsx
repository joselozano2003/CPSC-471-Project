import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="flex items-center justify-center gap-4">
      <p>Hey, {user.email}!</p>
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline btn btn-primary hover:bg-btn-background-hover mt-5">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <button className="py-2 px-3 flex rounded-md no-underline btn btn-primary">
      <Link
        href="/login"
      >
        Login
      </Link>
    </button>
  )
}
