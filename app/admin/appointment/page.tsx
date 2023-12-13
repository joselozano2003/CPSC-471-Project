import { db } from "@/utils/prisma"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isAdmin, isUserComplete } from "@/utils/roles/route"
import Link from "next/link"
import BackButton from "@/components/BackButton"
import App from "next/app"
import AppointmentForm from "./AppointmentForm"

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
        <div>
            <BackButton href="/admin" />
            <h1 className="m-5 font-bold text-3xl text-center">Appointments</h1>
            <AppointmentForm adminEmail={userEmail!}/>
        </div>
    )
}