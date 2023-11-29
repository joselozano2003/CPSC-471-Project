
export default function AppointmentTable() {

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
                    <th>Appointment ID </th>
                    <th>Date</th>
                    <th>Location </th>
                    <th>Appointment Notes </th>
                    <th>Time </th>
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
                        <div className="font-bold">123123123</div>
                        
                        </div>
                    </div>
                    </td>
                    <td>
                        Nov 28, 2023
                    <br/>
                    
                    </td>
                    <td>
                        Hospital Room
                    </td>
                    <th>
                    <button className="btn btn-ghost btn-xs"> Details</button>
                    </th>
                    <td>
                        11:00AM - 12:00PM
                    </td>
                    
                </tr>

                </tbody>
            </table>
        </div>
        
        
    )
}