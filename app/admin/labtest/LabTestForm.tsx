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
        const docEmail = formData.get('docEmail')
        const appointmentStart = formData.get('time1')
        const appointmentEnd = formData.get('time2')

        let notes;
        if (formData.get('notes')){
            notes = formData.get('notes')
        }
        else {
            notes = ''
        }


        const location = formData.get('location')
        const date = formData.get('date')


        if (!userEmail || !docEmail || !appointmentStart || !appointmentEnd || !location || !date) {
            toast.error('Please fill in all fields')
            return
        }

        if (appointmentStart > appointmentEnd) {
            toast.error('Appointment start cannot be after appointment end')
            return
        }

        const dateValue = formData.get('date') as string;
        const appointmentStartValue = formData.get('time1') as string;
        const appointmentEndValue = formData.get('time2') as string;


        const appointmentStartPro = new Date(`${dateValue}T${appointmentStartValue}`).toISOString();
        const appointmentEndPro = new Date(`${dateValue}T${appointmentEndValue}`).toISOString();

        console.log(userEmail, docEmail, notes, location, appointmentStartPro, appointmentEndPro, adminEmail)

        const res = await fetch('/api/admin/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userEmail,
                docEmail,
                notes,
                location,
                appointmentStartPro,
                appointmentEndPro,
                adminEmail
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
            window.location.replace('/admin')
        }
    }

    return (
        <div className='flex flex-col justify-center items-center bg-'>
            <h1 className='m-5 text-center font-bold text-2xl'>User Profile</h1>
            <form onSubmit={registerPatient} className="form-control">
                <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                    <div>
                        <label className="font-bold" htmlFor="email">User Email</label>
                        <input type="text" name="email" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="docEmail">Doctor Email</label>
                        <input type="text" name='docEmail' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6">    
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="date">Purpose</label>
                        <textarea name="notes" className="textarea h-24 textarea-bordered w-full max-w-xs my-2 text-center" required={false} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="date">Special Instructions</label>
                        <textarea name="notes" className="textarea h-24 textarea-bordered w-full max-w-xs my-2 text-center" required={false} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="location">Location</label>
                        <input type="text" name='location' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label className="font-bold" htmlFor="date">Appointment Date</label>
                    <input type="date" name="date" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                </div>
                <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                    <div>
                        <label className="font-bold" htmlFor="time1">Appointment Time</label>
                        <input type="time" name="time1" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="time2">Appointment End</label>
                        <input type="time" name='time2' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <button className="btn-primary btn mt-5 text-white" type="submit">Register Lab Test</button>
            </form>
        </div>
    )

}
