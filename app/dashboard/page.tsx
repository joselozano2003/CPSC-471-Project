import Dash from "./Dash";
import DashboardNavbar from "./DashboardNavbar";
import './page.css'

import { db } from "@/utils/prisma"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { isPatient, isUserComplete } from "@/utils/roles/route";
import Link from "next/link";
import xrayBackground from "@/public/x-ray-scan.jpg";

export default async function Dashboard() {

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

    const userIsPatient = await isPatient(userEmail!)
    const patientData = await db.patient.findMany({
        where: {
            userId: userEmail
        }
    })

    let appointmentFlag = true
    let appointmentData
    if (patientData.length === 0) {
        appointmentFlag = false
    }
    else {
        appointmentFlag = true
        appointmentData = await db.appointment.findMany({
            where: {
                patientId: patientData[0].id
            }
        })
    }


    let patientRecord: any = []
    if (appointmentFlag) {
        patientRecord = await db.medicalRecord.findMany({
            where: {
                patientId: patientData[0].id
            }
        })
    }
    let recordFlag = true
    if (patientRecord.length === 0) {
        recordFlag = false
    }
    else {
        recordFlag = true
    }


    let medicalReports: any = []
    if (recordFlag) {
        medicalReports = await db.medicalReport.findMany({
            where: {
                medicalRecordId: patientRecord[0].id
            }
        })
    }
    recordFlag = true
    if (medicalReports.length === 0) {
        recordFlag = false
    }
    else {
        recordFlag = true
    }

    const bgStyling = {
        backgroundImage: `url(${xrayBackground.src})`,
        backgroundSize : "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const insuranceData = await db.insurancePolicy.findMany({
        where: {
            userId: userEmail
        }
    })

    let companyData: any = []

    let insuranceFlag = true

    if (insuranceData.length === 0) {
        insuranceFlag = false
    }
    else {
        insuranceFlag = true
        companyData = await db.insuranceCompany.findMany({
            where: {
                id: insuranceData[0].insuranceCompanyId
            }
        })
    }


    return (
        <div>
            <div className="navbar-container"> 
                <DashboardNavbar userEmail={userEmail!}/>
            </div>
            {
                userIsPatient ? <Dash companyData={companyData} userData={patientData} insuranceData={insuranceData} recordData={medicalReports} appointmentData={appointmentData} appointmentFlag={appointmentFlag} recordFlag={recordFlag}/> 
                : 
                <div className="modal-container">
                    <h1 className="m-5 font-bold text-3xl text-center">Staff Portal</h1>
                    <div className="background-wrapper" style={bgStyling}>
                    <div className="flex flex-row justify-around w-[50%]">
                        <Link href={"/admin"}>
                            <button className="btn btn-primary text-lg py-2 px-4">
                                Admin
                            </button>
                        </Link>
                        <Link href={"/doctor_dashboard"}>
                            <button className="btn btn-primary text-lg py-2 px-4">
                                Doctor
                            </button>
                        </Link>

                        {/* <Link href={"/dashboard/pharmDashboard"}>
                            <button className="btn btn-primary text-lg py-2 px-4">
                                Pharmacy
                            </button>
                        </Link> */}

                    </div>
                    </div>
                </div>
        }   
        </div>
    )
}
