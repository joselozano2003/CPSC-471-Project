
export default function CreateMedRecord() {

    return (
        <form className="form-control">
            <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                <div>
                    <label className="font-bold" htmlFor="email"> Medical Record ID  </label>
                    <input type="text" name="email" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} />
                </div>
        
            </div>
            
            <button className="btn-primary btn mt-5 text-white" type="submit">Finish Creating Medical Record </button>
        </form>

    )
}