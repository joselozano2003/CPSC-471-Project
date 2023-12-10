import { db } from "@/utils/prisma"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { isUserComplete } from "@/utils/roles/route"
import FirstTimeForm from "./Forms/FirstTimeForm"



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

    const userExists = await isUserComplete(userEmail!)

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
        <div className="flex flex-col justify-center items-center m-5 text-center">
            <h1 className="text-2xl font-bold">First Time User</h1>
            <h2>Please complete your profile to function the app</h2>
            <FirstTimeForm />
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