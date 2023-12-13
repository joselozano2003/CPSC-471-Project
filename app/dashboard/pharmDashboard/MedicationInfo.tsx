
interface Props {
    closeModal:  ()=>void
}


export default function MedicationInfo(props: Props) {


    return (
        <div className="overflow-x-auto">
                
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Medication Name </th>
                        <th>Grams</th>
                        <th>Cost</th>
                        <th>Cost w/ Coverage?</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div>
                            <div className="font-bold">MEDICATION NAME</div>
                            
                            </div>
                        </div>
                        </td>
                        <td>
                        50.00g
                        <br/>
                        </td>

                        <td>$100.00</td>

                        <td>$25.00</td>

                        <th>
                        <button className="btn btn-ghost btn-xs">Edit Details</button>
                        </th>

                        <th>
                        <button className="btn btn-ghost btn-xs">Delete Medicine</button>
                        </th>
                    </tr>
                    
        
                    </tbody>
                
                    
                </table>


                <button className="btn btn-primary" onClick={props.closeModal}>Close Medications</button>

        </div>
    )


}