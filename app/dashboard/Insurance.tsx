
interface Props {

    closeInsurance:  ()=>void
}


export default function Insurance(props: Props) {

    

    return (
            
           
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 flex items-center justify-center">
        <div className="modal-container bg-white">
            <div className="modal-overlay">
                <div className="centerMenu">
                    
                </div>
                <div className="content-view">
                    <p> Test </p> 
                </div>
                <div className="modal-action">
                    <button className="btn" onClick={props.closeInsurance}>Close!</button>
                </div>
            </div>
        </div>
    </div>
               

        
    )
}