import './Dashboard.css'
import DashBoardNavbar from "./DashboardNavbar"
import { useState } from 'react';



interface Props {
    children: any
}

export default function Dashboard(props: Props) {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    

    return (

        <div>
            
            <div className="navbar-container"> 
                <DashBoardNavbar title="Medical Reports" description="View your medical reports"> </DashBoardNavbar>
                <DashBoardNavbar title="Prescriptions" description="View your past and current prescriptions"> </DashBoardNavbar>
                <DashBoardNavbar title="Appointments" description="View your past and future appointments"> </DashBoardNavbar>
            </div>

            
            <button className="btn" onClick={openModal}>Open modal</button>
            {modalOpen && (
                <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>

            )}
            
                
            
        </div>

    )



}