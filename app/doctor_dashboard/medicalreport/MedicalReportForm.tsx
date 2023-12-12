"use client";

import toast from "react-hot-toast";

interface Props {
    adminEmail: string
}

export default function MedicalReportForm({ adminEmail}: Props) {

    const registerPatient = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const recordId = formData.get('recordId')
        const testId = formData.get('testId')
        const treatment = formData.get('treatment')
        const diagnostic = formData.get('diagnostic')
        const date = formData.get('date')

        let notes;
        if (formData.get('notes')){
            notes = formData.get('notes')
        }
        else {
            notes = ''
        }

        if (!recordId || !testId || !treatment || !diagnostic || !date) {
            toast.error('Please fill in all fields')
            return
        }

        const appointmentPro = new Date(`${date}T${"12:00"}`).toISOString();
        console.log(recordId, testId, notes, treatment, diagnostic, appointmentPro)
        
        const res = await fetch('/api/doctor/createMedicalReport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recordId,
                testId,
                notes,
                treatment,
                diagnostic,
                appointment: appointmentPro,
            })
        })

        const data = await res.json()

        console.log(data)

        if (data.error) {
            toast.error(data.error)
            return
        }
        else if (data.status == 500){
            toast.error(data.error)
            return
        }
        else if (data.status == 200){
            toast.success('Appointment successfully registered')
            // window.location.replace('/admin')
        }
    }

    return (
        <div className='flex flex-col justify-center items-center bg-'>
            <h1 className='m-5 text-center font-bold text-2xl'>Medical Report</h1>
            <form onSubmit={registerPatient} className="form-control">
                <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                    <div>
                        <label className="font-bold" htmlFor="recordId">Medical Record Id</label>
                        <input type="number" name="recordId" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="testId">Medical Test Id</label>
                        <input type="text" name='testId' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6">    
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="notes">Notes</label>
                        <textarea name="notes" className="textarea h-24 textarea-bordered w-full max-w-xs my-2 text-center" required={false} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="treatment">Treatment</label>
                        <input type="text" name='treatment' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6">
                    <div>
                        <label className="font-bold" htmlFor="diagnostic">Diagnostics</label>
                        <input type="text" name='diagnostic' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="date">Date</label>
                        <input type="date" name='date' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <button className="btn-primary btn mt-5 text-white" type="submit">Create Report</button>
            </form>
        </div>
    )

}
