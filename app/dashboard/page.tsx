'use client'

import DashboardModals from "./DashboardModals"
import DashboardNavbar from "./DashboardNavbar";
import DashboardInfo from "./DashboardInfo";
import medicalBackground from "public/medical-background.jpg"

import './page.css'
import { SetStateAction, useState } from 'react';



interface Props {
    children: any
}

export default function Dashboard(props: Props) {


    const [modalOpenState, setOpenModalState] = useState(false);
    const [modalTitle, setModalTitle] = useState('');


    const openModal = (title: SetStateAction<string>) => {
        setModalTitle(title);
        setOpenModalState(true);
    }

    const closeModel = () => {
        setOpenModalState(false);
    }

    const bgStyling = {
        backgroundImage: `url(${medicalBackground.src})`,
        backgroundSize : "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    
    }


    return (

        <div>

            <div className="navbar-container"> 
                <DashboardNavbar> </DashboardNavbar>
            </div>

            
            <div className="modal-container">

                <div className="h1-container">
                <h1> View Personal Information </h1>
                </div>



                <div className="background-wrapper" style={bgStyling}>

                <div className="modal-wrapper"> 


                    <DashboardModals title="Medical Record" description="View your medical reports" openModal={openModal}> </DashboardModals>
                    <DashboardModals title="Prescriptions" description="View your past and current prescriptions" openModal={openModal}> </DashboardModals>
                    <DashboardModals title="Appointments" description="View your past and future appointments" openModal={openModal}> </DashboardModals>
                </div>
                
                </div>
                <div className="modal-clicked-container">

                    {modalOpenState && (<DashboardInfo title={modalTitle} closeModal={closeModel}></DashboardInfo>)}


                </div>

            </div>
            
            

            
    
            
                
            
        </div>

    )



}

// adjust for when buttons are pressed, it brings you down to the page
// fix the modal wrapper make sure they're spaced evenly