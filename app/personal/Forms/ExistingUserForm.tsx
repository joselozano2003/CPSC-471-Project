"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AppUser } from "@prisma/client";

interface Props {
    userData: AppUser
}

export default function ExistingUserForm({ userData }: Props) {

    const [gender, setGender] = useState('');

    useEffect(() => {
        setGender(userData.gender ?? '')
    },[])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(event.target.value);
    };

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

        const body = {
            userEmail: userData.id,
            firstName,
            lastName,
            address,
            birthDate,
            phone,
            emergencyName,
            emergencyPhone,
            sex,
            isPatient: userData.isPatient,
            isStaff: userData.isStaff,
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
            toast.success('User data updated successfully')
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
                        <input type="text" name="name" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={userData.firstName ?? ""}/>
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="name2">Last Name</label>
                        <input type="text" name='name2' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={userData.lastName ?? ""}/>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center [&>*]:m-2">
                    <div>
                        <label className="font-bold" htmlFor="address">Address</label>
                        <input type="text" name='address' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={userData.address ?? ""}/>
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="birthDate">Birth Date</label>
                        <input type="date" name='birthDate' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={userData.birthDate ? userData.birthDate.toISOString().slice(0, 10) : ''}/>
                        {/*Add ur own calendar if U want*/}
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center [&>*]:m-2">
                    <div>
                        <label className="font-bold" htmlFor="phone">Phone Number</label>
                        <input type="tel" name='phone' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={userData.phone}/>
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
                            <input type="text" name='emergencyName' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={userData.emergencyContactName}/>
                        </div>

                       <div>  
                            <label className="font-bold" htmlFor="emergencyPhone">Phone Number</label>
                            <input type="tel" name='emergencyPhone' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={userData.emergencyContactPhone}/>
                       </div>
                    </div>
                </div>
                <button className="btn-primary btn mt-5 text-white" type="submit">Edit User</button>
            </form>
        </div>
    )
}