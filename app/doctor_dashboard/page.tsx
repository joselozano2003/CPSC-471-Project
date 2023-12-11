


import DashboardNavbar from '../dashboard/DashboardNavbar'
import Dash from './Dash';

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isUserComplete } from "@/utils/roles/route";

interface DoctorProps {
  children: any
  
}

export default async function DoctorDashboard(props: DoctorProps) {

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

    return (
        <div>
            <div className="navbar-container"> 
                <DashboardNavbar userEmail={userEmail!}/>
            </div>    
            <Dash />
        </div>
    )
}
