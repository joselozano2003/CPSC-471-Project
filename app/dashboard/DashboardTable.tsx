import { MedicalReport } from "@prisma/client"
interface Props {
    data: MedicalReport[]
}


export default function DashboardTable({ data }: Props) {


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
                        <th>Date</th>
                        <th>Treatment</th>
                        <th>Diagnosis</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        data.map((report) => (
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                        <div className="font-bold">{report.date.toLocaleDateString()}</div>
                                        </div>
                                    </div>
                                    </td>
                                <td>
                                {report.treatment}
                                <br/>
                                
                                </td>
                                <td>{report.diagnostics}</td>
                                <th>
                                <button className="btn btn-ghost btn-xs">{report.notes}</button>
                                </th>
                            </tr>
                        ))
                    }
                                       
        
                    </tbody>
                
                    
                </table>
        </div>



    


    )

}