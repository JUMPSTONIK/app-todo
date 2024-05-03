import { cookies } from 'next/headers'

export const getToken = () =>{
    const cookieStore = cookies()
    return cookieStore.get('accessToken')?.value ?? null
}

export const setToken = ( value:string) =>{
    const cookieStore = cookies()
    cookieStore.set('accessToken' , value)
}

export const removeToken = () =>{
    const cookieStore = cookies()
    cookieStore.delete('accessToken')
}


