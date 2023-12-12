interface Props {
    closeEditMedicine:  ()=>void
}


export default function AddMedication(props: Props) {

    return (
            
           
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-80 flex items-center justify-center">
        <div className="modal-container bg-white">
            <div className="modal-overlay">

                <div className="content-view">
                    

                <form className="form-control">
                    <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                        <div>
                            <label className="font-bold" htmlFor="email">Medication Name </label>
                            <input type="text" name="email" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                        </div>
                        <div>
                            <label className="font-bold" htmlFor="name2">Medication ID </label>
                            <input type="text" name='docEmail' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                        </div>
                    </div>
                    <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                        <div>
                            <label className="font-bold" htmlFor="height">Weight </label>
                            <input type="number" name="height" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                        </div>
                        <div>
                            <label className="font-bold" htmlFor="weight"> Cost </label>
                            <input type="number" name='weight' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                        </div>
                        <div>
                            <label className="font-bold" htmlFor="weight"> Cost with Insurance </label>
                            <input type="number" name='weight' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                        </div>
                    </div>
                    <button className="btn-primary btn mt-5 text-white" type="submit">Add Medicine </button>
                </form>

                </div>
                <div className="modal-action">
                    <button className="btn" onClick={props.closeEditMedicine}>Close!</button>
                </div>
            </div>
        </div>
    </div>
               

        
    )


}