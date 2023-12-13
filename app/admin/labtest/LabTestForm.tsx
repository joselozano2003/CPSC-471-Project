"use client";

import toast from "react-hot-toast";

interface Props {
    adminEmail: string
}

export default function LabTestForm({ adminEmail}: Props) {

    const registerPatient = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const userEmail = formData.get('email')
        const docEmail = formData.get('doctorEmail')
        const medicalReportId = formData.get('medicalReport')
        const testName = formData.get('name')
        const location = formData.get('location')

        const time = formData.get('time1')

        const date = formData.get('date')


        console.log(userEmail, docEmail, medicalReportId, testName, location, time, date)
        if (!userEmail || !docEmail || !time || !location || !date) {
            toast.error('Please fill in all fields')
            return
        }

        const dateValue = formData.get('date') as string;
        const appointmentStartValue = formData.get('time1') as string;

        const appointmentStart = new Date(`${dateValue}T${appointmentStartValue}`).toISOString();



        const res = await fetch('/api/admin/labTest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userEmail,
                docEmail,
                medicalReportId,
                testName,
                location,
                appointmentStart,
                adminEmail
            })
        })

        const data = await res.json()

        console.log(data)

        if (data.error) {
            toast.error(data.error)
            return
        }
        else {
            toast.success('Lab Test successfully registered')
        }

        // if (data.error) {
        //     toast.error(data.error)
        //     return
        // }
        // else if (data.status == 500){
        //     toast.error(data.error)
        //     return
        // }
        // else if (data.status == 200){
        //     toast.success('Appointment successfully registered')
        //     window.location.replace('/admin')
        // }
    }

    return (
        <div className='flex flex-col justify-center items-center bg-'>
            <form onSubmit={registerPatient} className="form-control">
                <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                    <div>
                        <label className="font-bold" htmlFor="email">Patient Email</label>
                        <input type="text" name="email" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="doctorEmail">Doctor Email</label>
                        <input type="text" name='doctorEmail' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6">    
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="medicalReport">Medical Report Id</label>
                        <input type="number" name="medicalReport" className="textarea h-24 textarea-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="name">Test Name</label>
                        <input type="text" name="name" className="textarea h-24 textarea-bordered w-full max-w-xs my-2 text-center" required={false} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="location">Location</label>
                        <input type="text" name='location' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label className="font-bold" htmlFor="date">Test Date</label>
                    <input type="date" name="date" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                </div>
                <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                    <div>
                        <label className="font-bold" htmlFor="time1">Test Time</label>
                        <input type="time" name="time1" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <button className="btn-primary btn mt-5 text-white" type="submit">Register Lab Test</button>
            </form>
        </div>
    )

}
