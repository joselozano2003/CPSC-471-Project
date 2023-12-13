import { InsuranceCompany, InsurancePolicy } from "@prisma/client"

interface Props {
    insuranceData: InsurancePolicy[]
    companyData: InsuranceCompany[]

}

export default function ViewInsurance({ insuranceData, companyData }: Props) {

    console.log(insuranceData, companyData)

    return (
        <div className='view-insurance'> 
            <p><em>Provider:</em>  {companyData ? companyData[0].name : ""}</p>
            <p><em>Policy Number:</em>  {insuranceData? insuranceData[0].id : ""}</p>
            <p><em>Expiry Date:</em>  {insuranceData? insuranceData[0].expirationDate.toLocaleDateString() : ""} </p>
            <p><em>Coverage Amount:</em>  {insuranceData? insuranceData[0].coverageAmount : ""} </p>
        </div>
        


    )

}