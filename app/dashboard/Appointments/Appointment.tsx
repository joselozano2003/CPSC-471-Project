import { useEffect, useState } from "react";
import './Appointment.css'
import AppointmentTable from "./AppointmentTable";
import AppointmentScheduler from "./ApptScheduler";

interface Props {

    closeAppt:  ()=>void
}

export default function Appointment(props: Props) {


        const [isAppointmentTable, setAppointmentTable] = useState(true);
        const [isViewApptsClickable, setViewApptsClickable] = useState(true);
        const [isViewScheduleClickable, setViewScheduleClickable] = useState(true);

        useEffect(() => {
            
            //We want to show the appointments table first 
            showAppointments(true);

          }, []);

        const showAppointments = (isShowing: boolean) => {

            if (isShowing && isViewApptsClickable) {

                setAppointmentTable(true)
                setViewApptsClickable(false)
                setViewScheduleClickable(true)

            } else if (!isShowing && isViewScheduleClickable) {

                setAppointmentTable(false)
                setViewApptsClickable(true)
                setViewScheduleClickable(false)
            }
            

        }


        let content;

        if (isAppointmentTable) {

            //Show appointments table
            content=(
            <div> 
                <AppointmentTable></AppointmentTable>
                

            </div>
            
            )

        } else {

            //Give the user the option to book appointment
            content=<AppointmentScheduler></AppointmentScheduler>
        }



        return (
            
           
            <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 flex items-center justify-center">
            <div className="modal-container bg-white">
                <div className="modal-overlay">
                    <div className="centerMenu">
                        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                            <li>
                                <button disabled={!isViewApptsClickable} onClick={() => showAppointments(true)}>
                                    View Appointments
                                </button>
                            </li>
                            <li>
                                <button disabled={!isViewScheduleClickable} onClick={() => showAppointments(false)}>
                                    Schedule Appointments
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="content-view">
                        {content}
                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={props.closeAppt}>Close!</button>
                    </div>
                </div>
            </div>
        </div>
                   

            
        )

}