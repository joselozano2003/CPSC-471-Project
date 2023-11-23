

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, use, useState, SetStateAction, MouseEventHandler } from "react";
import './DashboardModals.css'


interface Props {

    children: string
    title: string
    description: string
    openModal: (title: string) => void;
    

}

export default function DashboardModals(props: Props) {

    //This is needed because otherwise onClick will error below 
    const handleModalOpen = () => {
        props.openModal(props.title);
    };

    return (

        
        <div className="card w-96 bg-neutral text-neutral-content" onClick={handleModalOpen}>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                
            </div>
        </div>
        

    )


}