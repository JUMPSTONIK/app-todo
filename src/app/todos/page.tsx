
import { validateToken } from "@/action"
import { TodoView } from "@/components/todo"
import { redirect } from "next/navigation"

export default async function Todos(){

    const res = await validateToken()
    if(!res) redirect('/login')
    
    return(
        <TodoView/>
    )
}