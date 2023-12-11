import { db } from "@/utils/prisma"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isAdmin, isUserComplete } from "@/utils/roles/route"
import RegisterPatientForm from "./RegisterPatientForm"
import BackButton from "@/components/BackButton"

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const userEmail = user.email

    const isUserAdmin = await isAdmin(userEmail!)

    if (isUserAdmin === false) {
        redirect('/dashboard')
    }

    return (
        <div className="m-5 flex flex-col justify-center items-center">
            <BackButton href="/admin" />
            <h1 className="m-5 font-bold text-3xl text-center">Admin</h1>
            <RegisterPatientForm />
        </div>
    )
}