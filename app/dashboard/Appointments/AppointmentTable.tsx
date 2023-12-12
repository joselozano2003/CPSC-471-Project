import { Appointment } from "@prisma/client"
interface AppointmentTableProps {
    data: Appointment[];
}

export default function AppointmentTable({ data }: AppointmentTableProps) {


    console.log(data)
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

                {data.map((appointment) => (
                    <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center gap-3">
                        <div>
                        <div className="font-bold">{appointment.id}</div>
                        
                        </div>
                    </div>
                    </td>
                    <td>
                       {appointment.startDate.toDateString()}
                    <br/>
                    
                    </td>
                    <td>
                        {appointment.location}
                    </td>
                    <th>
                    <button className="btn btn-ghost btn-xs"> Details</button>
                    </th>
                    <td>
                        {appointment.startDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {appointment.endDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </td>
                    
                </tr>
                ))}
                

                </tbody>
            </table>
        </div>
        
        
    )
}