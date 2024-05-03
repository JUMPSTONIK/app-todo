import { validateToken } from "@/action"
import { LoginView } from "@/components/login"
import { redirect } from "next/navigation"


export default async function Login(){

    const res = await validateToken()
    if(res) redirect('/todos')

    return(
        <LoginView/>
    )
}