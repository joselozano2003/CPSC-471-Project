"use client";

import './page.css'
import { SetStateAction, useState } from 'react';

import medicalBackground from "@/public/medical-background.jpg"

import DashboardModals from "./DashboardModals"
import Appointment from "./Appointments/Appointment";
import DashboardInfo from "./DashboardInfo";

export default function Dash(){
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
        backgroundImage: `url(${medicalBackground.src})`,
        backgroundSize : "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    
    }

    return (

        <div className="modal-container">

                <div className="h1-container">
                <h1> View Personal Information </h1>
                </div>

                

                <div className="background-wrapper" style={bgStyling}>

                <div className="modal-wrapper"> 


                    <DashboardModals title="Medical Record" description="View your medical reports" openModal={openModal}> </DashboardModals>
                    <DashboardModals title="Prescriptions" description="View your past and current prescriptions" openModal={openModal}> </DashboardModals>
                

                    {/* MAKE THIS BUTTON OPEN UP THE APPOINTMENTS VIEW */}
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <button className="card-body items-center text-center" onClick={apptClicked}>
                            <h2 className="card-title">Appointments</h2>
                            <p>Schedule/View your past and future appointments</p>
                            
                        </button>

                        
                    </div> 

                    
                    
                </div>
                
                </div>
                <div className="modal-clicked-container">

                    {modalOpenState && (<DashboardInfo title={modalTitle} closeModal={closeModel}></DashboardInfo>)}
                    {showApptModal && (<Appointment closeAppt={closeAppt}></Appointment>)}
                </div>

            </div>
            
            
    )
}