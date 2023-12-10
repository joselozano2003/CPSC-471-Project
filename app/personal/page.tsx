import { db } from "@/utils/prisma"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'



export default async function Page(){
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const userEmail = user.email

    const userExists = await db.appUser.findUnique({
        where: {
            email: userEmail
        },
        select: {
            Patient: true,
            Staff: true,
        }
    })

    console.log(userExists)

    if (!userExists) {
        return <FirstTimeUser />
    }

    else {
        return <ReturningUser />
    }
}

function FirstTimeUser() {
    return (
        <div>
            <h1>First Time User</h1>
        </div>
    )
}

function ReturningUser() {
    return (
        <div>
            <h1>Returning User</h1>
        </div>
    )
}