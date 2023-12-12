"use client";

import React, { FC } from 'react'
import 'react-calendar/dist/Calendar.css';
import doctorDashboardBanner from "@/public/doctor-dashboard.jpg";
import DashboardInfo from '../DashboardInfo';
import Appointment from '../Appointments/Appointment';

import { SetStateAction, useState } from 'react';
import DashboardModals from '../DashboardModals';
import { Appointment as Appointments} from '@prisma/client';

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

                
                

            <div className="background-wrapper" style={bgStyling}>

                <div className="modal-wrapper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '50px'}}> 


                    <DashboardModals title="Medication" description="View all medications" openModal={openModal} > </DashboardModals>
                    <DashboardModals title="Modify Medications" description="Modify Medications" openModal={openModal}> </DashboardModals>
                

                    {/* MAKE THIS BUTTON OPEN UP THE APPOINTMENTS VIEW */}
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <button className="card-body items-center text-center" onClick={apptClicked}>
                            <h2 className="card-title">Scheduled Appointments</h2>
                            <p>Schedule/View your schedule</p>
                            
                        </button>

                        
                    </div> 

                    
                    
                </div>
                
                </div>
                <div className="modal-clicked-container">

                    {modalOpenState && (<DashboardInfo title={modalTitle} closeModal={closeModel}></DashboardInfo>)}
                    {/* {showApptModal && (<Appointment data={appointmentData} closeAppt={closeAppt}></Appointment>)}
                </div> */}
                </div> 
            </div>
    )
}