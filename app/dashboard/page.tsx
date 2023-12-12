import Dash from "./Dash";
import DashboardNavbar from "./DashboardNavbar";
import './page.css'

import { db } from "@/utils/prisma"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isUserComplete } from "@/utils/roles/route";


interface Props {
    children: any
    
}

export default async function Dashboard(props: Props) {

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
    
    if (!userExists) {
        return redirect('/personal')
    }

    const patientData = await db.patient.findMany({
        where: {
            userId: userEmail
        }
    })

    console.log(patientData)

    let flag = true
    let appointmentData
    if (patientData.length === 0) {
        flag = false
    }
    else {
        flag = true
        appointmentData = await db.appointment.findMany({
            where: {
                patientId: patientData[0].id
            }
        })

        console.log(appointmentData)
    }


    
    return (
        <div>
            <div className="navbar-container"> 
                <DashboardNavbar userEmail={userEmail!}/>
            </div>
            { flag ? <Dash appointmentData={appointmentData}/> : <div className="m-5 flex justify-center items-center"><h1 className="text-center font-bold text-2xl">Not a patient</h1></div>}
        </div>
    )
}
