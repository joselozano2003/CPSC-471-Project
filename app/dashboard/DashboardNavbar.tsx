import AuthButton from "@/components/AuthButton";
import "./DashboardNavbar.css"
import { db } from "@/utils/prisma";
import { AppUser } from "@prisma/client";
import Link from "next/link";

interface Props {
    userEmail: string
}

export default async function DashboardNavbar({ userEmail }: Props) {

    const userData: AppUser | null = await db.appUser.findUnique({
        where: {
            id: userEmail
        }
    })

    console.log(userData)

    return (

        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                </div>
                <a className="btn btn-ghost text-xl">Hospital Database</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* {userData?.isPatient ?? <li><a href="/dashboard"> View Personal Information</a></li>}
                    {userData?.isStaff ?? <li><a href="/doctor_dashboard"> DOCTOR DASHBOARD </a></li>} */}

                    <li><a href="/dashboard"> View Personal Information</a></li>
                    {userData?.isStaff ?? <li><a href="/doctor_dashboard"> DOCTOR DASHBOARD </a></li>}
                    <li><Link href={'/personal'}> Edit Personal Details </Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <AuthButton />
            </div>
        </div>
    )



}