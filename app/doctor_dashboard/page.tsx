


import DashboardNavbar from '../dashboard/DashboardNavbar'
import 'react-calendar/dist/Calendar.css';

import Dash from './Dash';


import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isUserComplete } from "@/utils/roles/route";
import { db } from '@/utils/prisma';


export default async function DoctorDashboard() {

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
    
    const appointmentData = await db.appointment.findMany({
        where: {
            physicianId: userEmail
        }
    })

    const medicalRecords = await db.medicalRecord.findMany({
        where : {
            physicianId: userEmail
        }
    })

    const medicalRecordIds = medicalRecords.map(record => record.id);

    console.log(medicalRecordIds)

    const medicalReports = await db.medicalReport.findMany({
        where: {
          medicalRecordId: {
            in: medicalRecordIds
          }
        }
    });

    return (
        <div>
            <div className="navbar-container"> 
                <DashboardNavbar userEmail={userEmail!}/>
            </div>    
            <Dash appointmentData={appointmentData} medicalReports={medicalReports}/>
        </div>
    )
}
