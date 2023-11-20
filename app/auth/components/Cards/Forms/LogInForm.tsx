"use client";

import { loginWithEmailAndPassword } from '@/app/auth/actions';
import { containsSQLInjection } from '@/lib/utils';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LogInForm() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const entries = Object.fromEntries(formData.entries());
        const email = String(entries.email);
        const password = String(entries.password);

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        if (containsSQLInjection(password)) {
            toast.error('Invalid symbol in password');
            return;
        }

        const data = {
            email: String(entries.email),
            password: String(entries.password),
        };


        const result = await loginWithEmailAndPassword(data);

        console.log(result);

        const { error } = JSON.parse(result);

        if (error) {
            toast.error(error.message);
            return;
        }

        else {
            toast.success('Logged In successfully');
            redirect('/home');
            return;
        }

    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="m-5 text-center font-bold">
                <h1 className='text-2xl'>Log In</h1>
            </div>
            <form onSubmit={handleSubmit} className="form-control">
                <label className="font-bold" htmlFor="email">Email</label>
                <input type="email" name="email" className="input input-bordered w-full max-w-xs my-2 text-center" required={true}/>
                <label className="font-bold" htmlFor="password">Password</label>
                <input type="password" name='password' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                <button className="btn-primary btn mt-5 text-white" type="submit">Log In</button>
            </form>
        </div>
    );
}
