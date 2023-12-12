import { useEffect, useState } from "react";
import ViewMedRecords from "./ViewMedRecord";
import CreateMedRecord from "./CreateMedRecord";

interface Props {

    closeMedicalRecord:  ()=>void
}


export default function MedicalRecords(props: Props) {

    const [isViewMedRecord, setViewMedRecord] = useState(true);
    const [isViewMedRecordClickable, setViewMedRecordClickable] = useState(true);
    const [isCreateMedRecordClickable, setCreateMedRecordClickable] = useState(true);

    useEffect(() => {
            
        //We want to show the appointments table first 
        showMedRecord(true);

    }, []);

    const showMedRecord = (isShowing: boolean) => {

        if (isShowing && isViewMedRecordClickable) {

            setViewMedRecord(true)
            setViewMedRecordClickable(false)
            setCreateMedRecordClickable(true)

        } else if (!isShowing && isCreateMedRecordClickable) {

            setViewMedRecord(false)
            setViewMedRecordClickable(true)
            setCreateMedRecordClickable(false)
            }
            
        }


        let content;

        if (isViewMedRecord) {

            //Show appointments table
            content=(
            <div> 
                <ViewMedRecords></ViewMedRecords>

            </div>
            
            )

        } else {

            //Give the user the option to book appointment
            content=<CreateMedRecord></CreateMedRecord>
        }

    

    return (
            
           
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 flex items-center justify-center">
        <div className="modal-container bg-white">
            <div className="modal-overlay">

                    <div className="centerMenu">
                        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                            <li>
                                <button disabled={!isViewMedRecordClickable} onClick={() => showMedRecord(true)}>
                                    View Medical Records
                                </button>
                            </li>
                            <li>
                                <button disabled={!isCreateMedRecordClickable} onClick={() => showMedRecord(false)}>
                                    Create Medical Record
                                </button>
                            </li>
                        </ul>
                    </div>
                
                    <div className="content-view">
                    

                    {content}


                </div>
                <div className="modal-action">
                    <button className="btn" onClick={props.closeMedicalRecord}>Close!</button>
                </div>
            </div>
        </div>
    </div>
               

        
    )
}