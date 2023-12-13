"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Props {
    userEmail: string
}

export default function FirstTimeForm({ userEmail }: Props) {

    const [gender, setGender] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };


    // TODO: Add extra fields for staff account for security purposes
    // const [showExtra, setShowExtra] = useState(false)

    // useEffect(() => {
    //     console.log(selectedOption)
    //     if (selectedOption === 'Staff Account') {
    //         setShowExtra(true)
    //     }
    //     else {
    //         setShowExtra(false)
    //     }
        
    // }, [selectedOption])



    const modifyProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const firstName = formData.get('name')
        const lastName = formData.get('name2')
        const address = formData.get('address')

        const date = formData.get('birthDate');
        let birthDate;
        if (typeof date === 'string') {
        birthDate = new Date(date).toISOString();
        } else {
            toast.error('Invalid date')
        }

        const phone = formData.get('phone')
        const emergencyName = formData.get('emergencyName')
        const emergencyPhone = formData.get('emergencyPhone')
        const sex = gender

        let isPatient, isStaff;

        if (selectedOption === 'Patient') {
            isPatient = true
            isStaff = false
        }

        else if (selectedOption === 'Staff Account') {
            isPatient = false
            isStaff = true
        }

        else {
            toast.error('Please select an option')
            window.location.reload()
        }

        const body = {
            userEmail,
            firstName,
            lastName,
            address,
            birthDate,
            phone,
            emergencyName,
            emergencyPhone,
            sex,
            isPatient,
            isStaff
        }
        
        console.log(body)

        const res = await fetch('/api/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        console.log(res)

        if (res.status === 200) {
            //reload page
            toast.success('Profile created successfully')
            window.location.reload()
        }

        else {
            alert('Something went wrong')
            toast.error('Something went wrong')
        }
    }
  
    return (
        <div className='flex flex-col justify-center items-center bg-'>
            <h1 className='m-5 text-center font-bold text-2xl'>User Profile</h1>
            <form onSubmit={modifyProfile} className="form-control">
                <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                    <div>
                        <label className="font-bold" htmlFor="name">First Name</label>
                        <input type="text" name="name" className="input input-bordered w-full max-w-xs my-2 text-center" required={true}/>
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="name2">Last Name</label>
                        <input type="text" name='name2' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center [&>*]:m-2">
                    <div>
                        <label className="font-bold" htmlFor="address">Address</label>
                        <input type="text" name='address' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="birthDate">Birth Date</label>
                        <input type="date" name='birthDate' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                        {/*Add ur own calendar if U want*/}
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center [&>*]:m-2">
                    <div>
                        <label className="font-bold" htmlFor="phone">Phone Number</label>
                        <input type="tel" name='phone' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold" htmlFor="sex">Sex</label>
                        <select name="sex" value={gender} onChange={handleChange} className="select select-bordered">
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center [&>*]:m-2">
                    <h1 className="font-bold">Emergency Contact</h1>
                    <div className="flex flex-row justify-center items-center [&>*]:m-2">
                        <div>
                            <label className="font-bold" htmlFor="emergencyName">Name</label>
                            <input type="text" name='emergencyName' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                        </div>

                       <div>  
                            <label className="font-bold" htmlFor="emergencyPhone">Phone Number</label>
                            <input type="tel" name='emergencyPhone' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                       </div>
                    </div>
                </div>
                <div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                    <span className="label-text">Patient</span>
                    <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-red-500"
                        value="Patient"
                        checked={selectedOption === 'Patient'}
                        onChange={handleChange2}
                    />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                    <span className="label-text">Staff Account</span>
                    <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-500"
                        value="Staff Account"
                        checked={selectedOption === 'Staff Account'}
                        onChange={handleChange2}
                    />
                    </label>
                </div>
                </div>
                <button className="btn-primary btn mt-5 text-white" type="submit">Finish User Registration</button>
            </form>
        </div>
    )
}