import { NextResponse, NextRequest } from "next/server";

import { db } from "@/utils/prisma"; 

export async function POST(request: NextRequest) {
    const data = await request.json();

    const { email, docEmail, height, weight } = data;

    console.log(email, docEmail, height, weight)

    // Check if entry exists

    const user = await db.patient.findMany({
        where: {
            userId: email
        }
    })

    console.log(user)

    // If entry does not exist, create new entry
    if (user.length == 0) {
        // Create new entry\

        try {
            const createUser = await db.patient.create({
                data: {
                    userId: email,
                    physicianId: docEmail,
                    height: Number(height),
                    weight: Number(weight)
                }
            })
    
            if (!createUser) {
                return NextResponse.json({error: "Error creating user", status: 500})
            }
    
            return NextResponse.json({status: 200})
        }
        catch (e) {
            console.log(e)
            return NextResponse.json({error: "Error creating user", status: 500})
        }
        
    }

    else {

        console.log("modifying user")

        try {
            const modifyUser = await db.patient.update({
                where: {
                    userId: email
                },
                data: {
                    userId: email,
                    physicianId: docEmail,
                    height: Number(height),
                    weight: Number(weight)
                }
            })
    
            console.log(modifyUser)
    
            if (!modifyUser) {
                return NextResponse.json({error: "Error modifying user", status: 500})
            }
    
            return NextResponse.json({status: 201})
        }
        catch (e) {
            console.log(e)
            return NextResponse.json({error: "Error modifying user", status: 500})
        }
        
    }

    return NextResponse.json({status: 200})
}
