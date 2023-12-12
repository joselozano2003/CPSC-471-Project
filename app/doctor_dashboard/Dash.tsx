"use client";

import React, { FC } from 'react'
import 'react-calendar/dist/Calendar.css';
import doctorDashboardBanner from "@/public/doctor-dashboard.jpg";
import DashboardInfo from '../dashboard/DashboardInfo';
import Appointment from '../dashboard/Appointments/Appointment';

import { SetStateAction, useState } from 'react';
import DashboardModals from '../dashboard/DashboardModals';
import { Appointment as Appointments} from '@prisma/client';
import Link from 'next/link';

import MedicalReportForm from './medicalreport/MedicalReportForm';

interface DashProps {
    appointmentData: Appointments[]
}

export default function Dash({ appointmentData }: DashProps) {

    const [modalOpenState, setOpenModalState] = useState(false);
    const [showApptModal, setShowApptModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');


    const openModal = (title: SetStateAction<string>) => {
        setModalTitle(title);
        setOpenModalState(true);
    }

    const closeModel = () => {
        setOpenModalState(false);
    }


    const apptClicked = () => {
        setShowApptModal(true);
    }

    const closeAppt = () => {
        setShowApptModal(false);
    }



    const bgStyling = {
        backgroundImage: `url(${doctorDashboardBanner.src})`,
        backgroundSize : "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    }

    return (
        <div className="modal-container">

                
                

            <div className="background-wrapper" style={bgStyling}>

                <div className="modal-wrapper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '50px'}}> 


                    <DashboardModals title="Medical Report" description="View patients' medical reports" openModal={openModal} > </DashboardModals>
                    <DashboardModals title="Prescriptions" description="View patients' past and ongoing prescriptions" openModal={openModal}> </DashboardModals>
                
                    <div className="card w-96 bg-neutral text-neutral-content text-center">
                        <Link href={"/doctor_dashboard/createMedicalRecord"}>
                            <h2 className="card-title">Create/Edit Medical Record</h2>
                            <p className='text-center'>Create/Edit Record for Patient</p>
                        </Link>
                    </div> 

                    {/* <div className="card w-96 bg-neutral text-neutral-content">
                        <button className="card-body items-center text-center" onClick={apptClicked}>
                            <h2 className="card-title">Scheduled Appointments</h2>
                            <p>Schedule/View your schedule</p>
                        </button>

                    </div>  */}

                    </div> 
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <Link href={"./doctor_dashboard/medicalreport"}>
                        <h2 className="card-title">Create Medical Report</h2>
                        </Link>
                    </div> 
                    
            
    
                </div>
                
                </div>
                <div className="modal-clicked-container">

                    {modalOpenState && (<DashboardInfo title={modalTitle} closeModal={closeModel}></DashboardInfo>)}
                    {showApptModal && (<Appointment data={appointmentData} closeAppt={closeAppt}></Appointment>)}
                </div>

            </div>
    )
}