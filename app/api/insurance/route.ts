import { NextResponse, NextRequest } from "next/server";

import { db } from "@/utils/prisma"; 

export async function POST(request: NextRequest) {

    const data = await request.json();

    const { userEmail, policyNumber, providerId, expiryDate, coverage } = data;

    // Check if policy exists

    try {
        const policy = await db.insurancePolicy.findUnique({
            where: {
                id: Number(policyNumber)
            }
        });
        if (policy) {
            console.log("Policy already exists");

            // Update record

            try {

                const updatedPolicy = await db.insurancePolicy.update({
                    where: {
                        id: Number(policyNumber)
                    },
                    data: {
                        expirationDate: expiryDate,
                        coverageAmount: Number(coverage),
                        userId: userEmail,
                        insuranceCompanyId: Number(providerId)
                    }
                });

                console.log("Success")

                return NextResponse.json({status: 200})

            }

            catch(e) {
                console.log(e)
                console.log("Error updating policy")
                return NextResponse.json({error: "Error updating policy", status: 500})
            }
            

            return NextResponse.json({status: 200})
        }
        else {
            console.log("Policy does not exist");

            const newPolicy = await db.insurancePolicy.create({
                data: {
                    id: Number(policyNumber),
                    expirationDate: expiryDate,
                    coverageAmount: Number(coverage),
                    userId: userEmail,
                    insuranceCompanyId: Number(providerId)
                }
            });

            return NextResponse.json({status: 200})
        }

    }
    catch (error) {
        console.error(error);
        return NextResponse.json({status: 500, message: "Internal Server Error"})
    }
}