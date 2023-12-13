import { useEffect, useState } from "react";
import EditInsurance from "./EditInsurance";
import ViewInsurance from "./ViewInsurance";
import { InsuranceCompany, InsurancePolicy } from "@prisma/client";


interface Props {
    insuranceData: InsurancePolicy[]
    closeInsurance:  ()=>void
    companyData: InsuranceCompany[]
    userData: any
}


export default function Insurance({insuranceData, closeInsurance, companyData, userData}: Props) {

    console.log(insuranceData, companyData, userData)

    const [isViewInsurance, setViewInsurance] = useState(true);
    const [isViewInsuranceClickable, setViewInsuranceClickable] = useState(true);
    const [isEditInsuranceClickable, setEditInsuranceClickable] = useState(true);

    useEffect(() => {
            
        //We want to show the appointments table first 
        showInsurance(true);

    }, []);

    const showInsurance = (isShowing: boolean) => {

        if (isShowing && isViewInsuranceClickable) {

            setViewInsurance(true)
            setViewInsuranceClickable(false)
            setEditInsuranceClickable(true)

        } 
        else if (!isShowing && isEditInsuranceClickable) {

            setViewInsurance(false)
            setViewInsuranceClickable(true)
            setEditInsuranceClickable(false)
        }
            
    }
    let content;

    if (isViewInsurance) {

        //Show appointments table
        content=(
        <div> 
            <ViewInsurance insuranceData={insuranceData} companyData={companyData}/>

        </div>
        
        )
    } else {
        //Give the user the option to book appointment
        content=<EditInsurance insuranceData={insuranceData} userData={userData}/>
    }
    return (  
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 flex items-center justify-center">
            <div className="modal-container bg-white">
                <div className="modal-overlay">
                <div className="centerMenu">
                            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                                <li>
                                    <button disabled={!isViewInsuranceClickable} onClick={() => showInsurance(true)}>
                                        View Insurance
                                    </button>
                                </li>
                                <li>
                                    <button disabled={!isEditInsuranceClickable} onClick={() => showInsurance(false)}>
                                        Edit Insurance
                                    </button>
                                </li>
                            </ul>
                        </div>
                    <div className="content-view">
                        {content}
                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={closeInsurance}>Close!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}