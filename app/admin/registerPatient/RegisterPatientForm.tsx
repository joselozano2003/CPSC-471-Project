"use client";

import toast from "react-hot-toast";

export default function RegisterPatientForm() {

    const registerPatient = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const docEmail = formData.get('docEmail')
        const height = formData.get('height')
        const weight = formData.get('weight')

        if (!email || !docEmail || !height || !weight) {
            toast.error('Please fill in all fields')
            return
        }

        if (Number(weight) < 0) {
            toast.error('Weight cannot be negative')
            return
        }

        else if (Number(height) < 0) {
            toast.error('Height cannot be negative')
            return
        }


        const res = await fetch('/api/adminToPatient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                docEmail,
                height,
                weight
            })
        })

        const data = await res.json()

        console.log(data)

        if (data.error) {
            toast.error(data.error)
            return
        }
        else if (data.status == 201){
            toast.success('User updated successfully')
            return
        }
        else {
            toast.success('User successfully registered')
            return
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
                        <label className="font-bold" htmlFor="name2">Doctor Email</label>
                        <input type="text" name='docEmail' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                    <div>
                        <label className="font-bold" htmlFor="height">Height</label>
                        <input type="number" name="height" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="weight">Weight (kg)</label>
                        <input type="number" name='weight' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <button className="btn-primary btn mt-5 text-white" type="submit">Finish User Registration</button>
            </form>
        </div>
    )

}
