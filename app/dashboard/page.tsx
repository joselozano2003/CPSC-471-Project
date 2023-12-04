import Dashboard from "./Dashboard"

import { db } from "@/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F');
    }

    const userEmail = session.user!.email!;

    const user = await db.user.findUnique({
        where: {
            email: userEmail
        }
    });

    console.log(user);

    const appUser = await db.appUser.findUnique({
        where: {
            userId: user!.id!
        }
    });

    console.log(appUser);

    // if (!appUser) {
    //     redirect('/onboarding');
    // }

    return (
        <div>
            <Dashboard />
        </div>
    )
}