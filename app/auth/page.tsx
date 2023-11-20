import React from "react";
import AuthForm from "./components/AuthForm";
import { readUserSession } from "@/lib/actions";
import { redirect } from "next/navigation";

import SignInPage from "./components/SignInPage";

export default async function page() {
	const { data: userSession } = await readUserSession();

	if (userSession.session) {
		return redirect("/");
	}
	return (
		<div className="flex flex-col items-center m-0 min-h-[100vh] justify-center">
            <h1 className="text-3xl font-bold p-5">Welcome</h1>
            <SignInPage/>
        </div>
	);
}
