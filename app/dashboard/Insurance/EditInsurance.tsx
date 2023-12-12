
export default function EditInsurance() {

    return (
        <form className="form-control">
            <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                <div>
                    <label className="font-bold" htmlFor="email">Policy Number </label>
                    <input type="text" name="email" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                </div>
                <div>
                    <label className="font-bold" htmlFor="name2">Policy Provider</label>
                    <input type="text" name='docEmail' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                </div>
            </div>
            <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                <div>
                    <label className="font-bold" htmlFor="height">Policy Type </label>
                    <input type="number" name="height" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                </div>
                <div>
                    <label className="font-bold" htmlFor="weight"> Expiry Date </label>
                    <input type="number" name='weight' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                </div>
                <div>
                    <label className="font-bold" htmlFor="weight"> Coverage Amount </label>
                    <input type="number" name='weight' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                </div>
            </div>
            <button className="btn-primary btn mt-5 text-white" type="submit">Finish User Registration</button>
        </form>

    )
    
}