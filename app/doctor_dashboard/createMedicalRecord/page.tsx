import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isDoctor, isUserComplete } from "@/utils/roles/route";
import { db } from '@/utils/prisma';
import CreateMedicalRecordForm from './CreateMedicalRecordForm';

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
        <div className='flex flex-col justify-center items-center p-7'>
            <h1 className='font-bold text-2xl'>Create Medical Record</h1>
            <CreateMedicalRecordForm doctorEmail={userEmail}/>
        </div>
    )    
}