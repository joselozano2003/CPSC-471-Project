import { db } from "@/utils/prisma"
import { AppUser } from "@prisma/client"



// Function to check if a user registration is complete
export async function isUserComplete(email: string) {
    const user = await db.appUser.findUnique({
        where: {
            id: email
        }
    })

    if (!user) {
        return false
    }

    if (user.firstName && user.lastName && user.phone && user.address) {
        if (user.isPatient || user.isStaff){
            return true
        }
    }

    return false
    
}

export async function isPatient(email: string) {
    const user = await db.patient.findUnique({
        where: {
            userId: email
        }
    })

    if (!user) {
        return false
    }

    return true
}


export async function isAdmin(email: string) {
    const user = await db.administrativeStaff.findUnique({
        where: {
            id: email
        }
    })

    if (!user) {
        return false
    }

    return true
}


export async function isDoctor(email: string) {

    const user = await db.physician.findUnique({
        where: {
            id: email
        }
    })

    if (!user) {
        return false
    }

    return true
}