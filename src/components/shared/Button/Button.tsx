'use client'
import { SyntheticEvent } from "react";
import styles from "./Button.module.sass"

interface ButtonProps{
    type?: 'button' | 'submit'
    style?: 'primary'  | 'secondary';
    children: string  | React.ReactElement;
    isDisabled?: boolean
    handleClick?:  (event ?: SyntheticEvent) => void
}

export const Button = (props: ButtonProps) =>{
    const { children, style = 'primary', type = 'button', isDisabled = false, handleClick } = props

    const getButtonType= () => style === 'primary' ? styles.Button_primary : styles.Button_secondary ;


    return(
        <button type={type} className={`${styles.Button} ${getButtonType()}`} onClick={handleClick} disabled={isDisabled}>{ children }</button>
    )
}