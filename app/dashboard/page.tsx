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
    
    return (
        <div>
            <div className="navbar-container"> 
                <DashboardNavbar userEmail={userEmail!}/>
            </div>
            <Dash />
        </div>
    )
}
