
export default function ViewMedRecords() {


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
                            <div className="font-bold">Name</div>
                            <div className="text-sm opacity-50">Med ID?</div>
                            </div>
                        </div>
                        </td>
                        <th>
                        <button className="btn btn-ghost btn-xs"> Edit Medical Record</button>
                        </th>
                    </tr>
                    
        
                    </tbody>
                
                    
                </table>
        </div>



    


    )


}