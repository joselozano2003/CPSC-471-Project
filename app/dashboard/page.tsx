'use client'

import DashboardModals from "./DashboardModals"
import DashboardNavbar from "./DashboardNavbar";

import './page.css'
import { useState } from 'react';



interface Props {
    children: any
}

export default function Dashboard(props: Props) {


    return (

        <div>

            <div className="navbar-container"> 
                <DashboardNavbar> </DashboardNavbar>
            </div>

            
            <div className="modal-container">

                <div className="h1-container">
                <h1> Viewing Personal Information </h1>
                </div>

                <div className="modal-wrapper"> 
                
                    <DashboardModals title="Medical Reports" description="View your medical reports"> </DashboardModals>
                    <DashboardModals title="Prescriptions" description="View your past and current prescriptions"> </DashboardModals>
                    <DashboardModals title="Appointments" description="View your past and future appointments"> </DashboardModals>
                 </div>


            </div>
            
            

            
    
            
                
            
        </div>

    )



}