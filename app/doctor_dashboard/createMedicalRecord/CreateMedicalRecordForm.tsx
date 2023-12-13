"use client";

import toast from "react-hot-toast";

interface Props {
    doctorEmail: string
}

export default function CreateMedicalRecordForm({ doctorEmail }: Props){

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const patientEmail = formData.get('patientEmail')


        const body = {
            patientEmail,
            doctorEmail
        }

        const res = await fetch('/api/doctor/createMedicalRecord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await res.json()

        if (data.error) {
            toast.error(data.error)
            return
        }
        else if (data.status === 404){
            toast.error('Patient not found')
            return
        }

        else if (data.status === 409){
            toast.error('Medical record already exists')
            return
        }
        else {
            toast.success('Medical record created')
            window.location.replace('/doctor_dashboard')
        }


    }
    return (
        <div className="w-[50%] flex justify-center items-center m-5">
            <form onSubmit={onSubmit} className="form-control">
                <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <label className="font-bold" htmlFor="patientEmail">Patient Email</label>
                        <input type="text" name="patientEmail" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <button className="btn-primary btn mt-5 text-white" type="submit">Create Record</button>
            </form>
        </div>
    )
}