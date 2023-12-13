


import DashboardNavbar from '../DashboardNavbar'
import 'react-calendar/dist/Calendar.css';
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

    const cookieStore = cookies() // get cookies from the incoming request
    const supabase = createClient(cookieStore) // create a new client using the cookies

    const {
        data: { user },
    } = await supabase.auth.getUser() // get the user from the client

    if (!user) {
        return redirect('/login') // if there is no user, redirect to login
    }

    const userEmail = user.email // get the user's email

    const userExists = await isUserComplete(userEmail!) // check if the user has completed their profile

    const patientData = await db.patient.findMany({ // get the patient data
        where: {
            userId: userEmail
        }
    })

    const appointmentData = await db.appointment.findMany({ // get the appointment data
        where: {
            physicianId: userEmail
        }
    })
    
    if (!userExists) {
        return redirect('/personal') // if the user has not completed their profile, redirect to personal
    }

    return (
        <div>
            <div className="navbar-container"> 
                <DashboardNavbar userEmail={userEmail!}/> 
            </div>    
            <Dash/>
        </div>
    )
}
