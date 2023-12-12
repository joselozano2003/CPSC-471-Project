"use client";

import React, { FC } from 'react'
import 'react-calendar/dist/Calendar.css';
import doctorDashboardBanner from "@/public/doctor-dashboard.jpg";
import DashboardInfo from '../dashboard/DashboardInfo';
import Appointment from '../dashboard/Appointments/Appointment';

import { SetStateAction, useState } from 'react';
import DashboardModals from '../dashboard/DashboardModals';
import { Appointment as Appointments} from '@prisma/client';
import MedicalRecords from './MedicalRecord/MedicalRecord';

interface DashProps {
    appointmentData: Appointments[]
}

export default function Dash({ appointmentData }: DashProps) {

    const [modalOpenState, setOpenModalState] = useState(false);
    const [showMedRecordModal, setMedRecordModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');


    const openModal = (title: SetStateAction<string>) => {
        setModalTitle(title);
        setOpenModalState(true);
    }

    const closeModel = () => {
        setOpenModalState(false);
    }


    const medicalRecordClicked = () => {
        setMedRecordModal(true);
    }

    const closeMedicalRecord = () => {
        setMedRecordModal(false);
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


                    <div className="card w-96 bg-neutral text-neutral-content">
                        <button className="card-body items-center text-center" onClick={medicalRecordClicked}>
                            <h2 className="card-title"> Medical Record </h2>
                            <p>View/Edit/Create Medical Records</p>
                            
                        </button>
                    </div> 


                    <DashboardModals title="Prescriptions" description="View patients' past and ongoing prescriptions" openModal={openModal}> </DashboardModals>
                

                    
                    
                </div>
                
                </div>
                <div className="modal-clicked-container">

                    {modalOpenState && (<DashboardInfo title={modalTitle} closeModal={closeModel}></DashboardInfo>)}
                    {showMedRecordModal && (<MedicalRecords closeMedicalRecord={closeMedicalRecord}></MedicalRecords>)}
                </div>

            </div>
    )
}