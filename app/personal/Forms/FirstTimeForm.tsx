"use client";

import * as React from "react";


export default function FirstTimeForm() {

    const modifyProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        const description = formData.get('description')

        const res = await fetch('/api/team/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description })
        })
        const data = await res.json()
        console.log(data)
    }
  
    return (
        <div className='flex flex-col justify-center items-center bg-'>
            <h1 className='m-5 text-center font-bold text-2xl'>User Profile</h1>
            <form onSubmit={modifyProfile} className="form-control">
                <label className="font-bold" htmlFor="name">Team Name</label>
                <input type="text" name="name" className="input input-bordered w-full max-w-xs my-2 text-center" required={true}/>
                <label className="font-bold" htmlFor="title">Description</label>
                <input type="text" name='description' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                <button className="btn-primary btn mt-5 text-white" type="submit">Create Team</button>
            </form>
        </div>
    )
}