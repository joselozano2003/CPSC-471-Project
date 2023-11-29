'use client'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { SignOutButton } from "@/components/buttons";
import "./DashboardNavbar.css"

interface Props {
    children: any
}

export default function DashboardNavbar(props: Props) {




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
                <li><a href="/dashboard"> View Personal Information</a></li>
                <li><a href="/doctor_dashboard"> DOCTOR DASHBOARD </a></li>
                <li><a> Edit Personal Details </a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <SignOutButton />
            </div>
        </div>


    )



}