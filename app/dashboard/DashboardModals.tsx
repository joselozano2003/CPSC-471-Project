

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, use, useState, SetStateAction, MouseEventHandler } from "react";
import './DashboardModals.css'


interface Props {

    children: string
    title: string
    description: string
    openModal: (title: string) => void;
    

}

export default function DashboardModals(props: Props) {


    const [modalColor, setModalColor] = useState("bg-neutral");

    //This is needed because otherwise onClick will error below 
    const handleModalOpen = () => {
        props.openModal(props.title);
        // setModalColor("#0099ff");
    };

    return (

        
        <div className={`card w-96 ${modalColor} text-neutral-content`} onClick={handleModalOpen}>
            <button className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                
            </button>
        </div>
        

    )


}