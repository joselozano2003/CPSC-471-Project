import { AppUser, InsurancePolicy, Patient } from "@prisma/client"
import toast from "react-hot-toast"


interface Props {
    insuranceData: InsurancePolicy[]
    userData: Patient[]
    
}
export default function EditInsurance({ insuranceData, userData }: Props) {

    console.log(userData[0].userId)
    console.log(insuranceData[0])
    const data:InsurancePolicy = insuranceData[0]
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const policyNumber = formData.get('policyNumber')
        const providerId = formData.get('providerId')
        const coverage = formData.get('coverage')
        const expiryDateValue = formData.get('expiryDate') as string;
        
        if (!policyNumber || !providerId || !expiryDateValue || !coverage) {
            toast.error('Please fill out all fields')
            return
        }
        
        const expiryDate = new Date(expiryDateValue);
        const expiryDateISO = expiryDate.toISOString();

        console.log(expiryDateISO)


        const body = {
            policyNumber,
            providerId,
            expiryDate: expiryDateISO,
            coverage, 
            userEmail: userData[0].userId
        }

        console.log(body)

        const res = await fetch('/api/insurance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        const result = await res.json()

        console.log(result)

        if (result.status === 200) {
            toast.success('Insurance Policy Updated')
            window.location.reload()
        } else {
            toast.error('Error Updating Insurance Policy')
        }
    }

    return (
        <form className="form-control" onSubmit={handleSubmit}>
            <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                <div>
                    <label className="font-bold" htmlFor="policyNumber">Policy Number </label>
                    <input type="number" name="policyNumber" className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={data ? data.id : ""}/>
                </div>
                <div>
                    <label className="font-bold" htmlFor="providerId">Policy Provider Id</label>
                    <input type="text" name='providerId' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={data ? data.insuranceCompanyId : ""}/>
                </div>
            </div>
            <div className="flex flex-row [&>*]:m-2 justify-center items-center">
                <div>
                    <label className="font-bold" htmlFor="expiryDate"> Expiry Date </label>
                    <input type="date" name='expiryDate' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={data ? data.expirationDate.toISOString().slice(0, 10) : ""}/>
                </div>
                <div>
                    <label className="font-bold" htmlFor="coverage"> Coverage Amount </label>
                    <input type="number" name='coverage' className="input input-bordered w-full max-w-xs my-2 text-center" required={true} defaultValue={data ? data.coverageAmount : ""}/>
                </div>
            </div>
            <button className="btn-primary btn mt-5 text-white" type="submit">Finish Updating Insurance Policy </button>
        </form>

    )
    
}