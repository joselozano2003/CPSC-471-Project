


import DashboardNavbar from '../DashboardNavbar'

import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import doctorDashboardBanner from "public/doctor-dashboard.jpg"; // <a href="https://www.freepik.com/free-photo/stethoscope-prescription-laptop_1129629.htm#query=healthcare&position=32&from_view=search&track=sph&uuid=9c095130-d8a5-450b-8847-30346a22881b">Image by jannoon028</a> on Freepik
import InnerPageBanner from './InnerPageBanner';
import DashboardInfo from '../DashboardInfo';
import Appointment from '../Appointments/Appointment';

import Dash from './Dash';


import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isUserComplete } from "@/utils/roles/route";
import { db } from '@/utils/prisma';

interface DoctorProps {
  children: any
  
}

export default async function PharmacyDashboard() {

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

    const patientData = await db.patient.findMany({
        where: {
            userId: userEmail
        }
    })

    const appointmentData = await db.appointment.findMany({
        where: {
            physicianId: userEmail
        }
    })

    console.log(appointmentData)
    
    if (!userExists) {
        return redirect('/personal')
    }

    return (
        <div>
            <div className="navbar-container"> 
                <DashboardNavbar userEmail={userEmail!}/>
            </div>    
            {/* <Dash appointmentData={appointmentData}/> */}
        </div>
    )
}
