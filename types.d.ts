interface ErrorPageProps{
    error: Error;
    reset: () => void;
}

type loginData = {
    email: string, 
    password: string
}

interface InputProps {
    type?: "text" | "password" | "email";
    iconName?: "email" | "password" | "search";
    name: string;
    value: string;
    placeHolder: string;
    label?: string;
    minLength?: number;
    maxLength?: number;
    errorMessage?: string;
    isValid?: boolean;
    handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonProps{
    type?: 'button' | 'submit'
    style?: 'primary'  | 'secondary';
    children: string  | React.ReactElement;
    isDisabled?: boolean
    handleClick?:  (event ?: SyntheticEvent) => void
}

interface IconProps{
    type?: string
}

interface TodoProps {
    content: string;
    handleDelete: (value:string) => void;
    isFirstEdit: boolean,
    index: number;
    setEdit: (todo:string, index:number) => void;
  }