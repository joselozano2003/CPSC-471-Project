import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isDoctor, isUserComplete } from "@/utils/roles/route";
import { db } from '@/utils/prisma';
import MedicalReportForm from './MedicalReportForm';
import BackButton from '@/components/BackButton';

export default async function Page() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const userEmail = user.email!

    const doctor = await isDoctor(userEmail!)

    if (!doctor) {
        return redirect('/dashboard')
    }

    return (
        <div>
            <BackButton href={'/doctor_dashboard'}/>
            <MedicalReportForm adminEmail=''/>
        </div>
    )
}