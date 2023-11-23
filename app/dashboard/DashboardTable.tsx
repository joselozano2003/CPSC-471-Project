
interface Props {
    children: any
}


export default function DashboardTable(props: Props) {



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
                        <th>Patient Name</th>
                        <th>Treatment</th>
                        <th>Diagnosis</th>
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
                            <div className="font-bold">Patient Name</div>
                            <div className="text-sm opacity-50">ADDRESS</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        HIV Test
                        <br/>
                        
                        </td>
                        <td>Positive</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    
        
                    </tbody>
                
                    
                </table>
        </div>



    


    )

}