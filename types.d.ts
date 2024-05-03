interface ErrorPageProps{
    error: Error;
    reset: () => void;
}

type loginData = {
    email: string, 
    password: string
}