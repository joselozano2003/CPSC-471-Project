"use client";

import React, { FC } from 'react'
import 'react-calendar/dist/Calendar.css';
import doctorDashboardBanner from "@/public/doctor-dashboard.jpg";
import Appointment from '../Appointments/Appointment';

import { SetStateAction, useState } from 'react';
import DashboardModals from '../DashboardModals';
import { Appointment as Appointments} from '@prisma/client';
import MedicationInfo from './MedicationInfo';

interface DashProps {
    appointmentData: Appointments[]
}

export default function Dash() {

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

                
            <p> test </p> 

            <div className="background-wrapper" style={bgStyling}>

                <div className="modal-wrapper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '50px'}}> 


                    <DashboardModals title="Medication" description="View and manage all medications" openModal={openModal} > </DashboardModals>

                
                </div>
                
                </div>
                <div className="modal-clicked-container">

                    {modalOpenState && (<MedicationInfo closeModal={closeModel}></MedicationInfo>)}
                    
                </div> 
            </div>
    )
}