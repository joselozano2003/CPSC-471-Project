'use client';
import './InnerPageBanner.css'
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import { useEffect } from 'react';
import React from 'react'
import doctorDashboardBackground from "public/doctor-dashboard.jpg"
import DashboardModals from '../DashboardModals'
import DashboardInfo from '../DashboardInfo';
import Appointment from '../Appointments/Appointment';

import { SetStateAction, useState } from 'react';

interface BannerProps {
  backgroundImage: string;
}

export default function InnerPageBanner(props: BannerProps) {
    const bgStyling = {
        backgroundImage: `url(${doctorDashboardBackground.src})`,
        backgroundSize : "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
    }
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

  return (
    <div className="background-wrapper" style={bgStyling}>
      <div className="modal-wrapper">

      <DashboardModals title="Medical Reports" description="View patients' medical report" openModal={openModal}> </DashboardModals>
      <DashboardModals title="Prescriptions" description="View patients' past and ongoing prescriptions" openModal={openModal}> </DashboardModals>
      <DashboardModals title="Scheduled Appointments" description="View your schedule" openModal={openModal}> </DashboardModals>
      </div>
      </div>
  )
}