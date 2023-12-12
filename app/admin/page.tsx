import { db } from "@/utils/prisma"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isAdmin, isUserComplete } from "@/utils/roles/route"
import Link from "next/link"

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
            <h1 className="m-5 font-bold text-3xl text-center">Admin</h1>
            <div className="flex flex-row justify-around w-[50%]">
                <Link href={"/admin/registerPatient"}>
                    <button className="btn btn-primary">
                        Register Patient
                    </button>
                </Link>
                <Link href={"/admin/appointment"}>
                    <button className="btn btn-primary">
                        Make Appointment
                    </button>
                </Link>
                <Link href={"/admin/labtest"}>
                    <button className="btn btn-primary">
                        Book Lab Test
                    </button>
                </Link>
            </div>
        </div>
    )
}